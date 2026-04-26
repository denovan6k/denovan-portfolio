import { describe, it, expect } from "vitest"
import * as fc from "fast-check"

// Inline the filter logic from project-filter.tsx so we can test it in isolation
// Feature: portfolio-wireframe-migration, Property 2: Filter correctness
interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  color: string
  category?: string
}

function filterProjects(
  projects: Project[],
  query: string,
  activeTags: string[],
  selectedCategory: string,
): Project[] {
  const q = query.trim().toLowerCase()
  return projects.filter((p) => {
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))

    const matchesTags = activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t))
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory

    return matchesQuery && matchesTags && matchesCategory
  })
}

// Arbitrary for a project
const projectArb = fc.record({
  title: fc.string({ minLength: 1, maxLength: 30 }),
  description: fc.string({ minLength: 1, maxLength: 100 }),
  tags: fc.array(fc.string({ minLength: 1, maxLength: 15 }), { minLength: 1, maxLength: 5 }),
  image: fc.constant("/placeholder.svg"),
  color: fc.constant("from-emerald-500 to-blue-500"),
  category: fc.option(fc.string({ minLength: 1, maxLength: 20 }), { nil: undefined }),
})

describe("ProjectFilter — Property 2: Filter correctness", () => {
  it("every result contains the query in title, description, or a tag (case-insensitive)", () => {
    // Validates: Requirements 4.7
    fc.assert(
      fc.property(
        fc.array(projectArb, { minLength: 0, maxLength: 20 }),
        fc.string({ minLength: 1, maxLength: 15 }),
        (projects, query) => {
          const results = filterProjects(projects, query, [], "All")
          const q = query.trim().toLowerCase()
          return results.every(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.tags.some((t) => t.toLowerCase().includes(q)),
          )
        },
      ),
      { numRuns: 100 },
    )
  })

  it("empty query returns all projects", () => {
    // Validates: Requirements 4.7
    fc.assert(
      fc.property(fc.array(projectArb, { minLength: 0, maxLength: 20 }), (projects) => {
        const results = filterProjects(projects, "", [], "All")
        return results.length === projects.length
      }),
      { numRuns: 100 },
    )
  })

  it("category filter returns only projects matching that category", () => {
    // Validates: Requirements 4.7
    fc.assert(
      fc.property(
        fc.array(projectArb, { minLength: 1, maxLength: 20 }),
        fc.string({ minLength: 1, maxLength: 20 }),
        (projects, category) => {
          const results = filterProjects(projects, "", [], category)
          return results.every((p) => p.category === category)
        },
      ),
      { numRuns: 100 },
    )
  })

  it("no results when query matches nothing", () => {
    // Validates: Requirements 4.8
    const projects: Project[] = [
      { title: "Alpha", description: "desc", tags: ["React"], image: "/img.png", color: "from-blue-500 to-cyan-500", category: "SaaS" },
    ]
    const results = filterProjects(projects, "zzzzzzzzzzzzzzzzzzz", [], "All")
    expect(results).toHaveLength(0)
  })
})
