
import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PanelsTopLeft } from "lucide-react"
import Linx from "./links"


export default function SheetDemo() {
  return (
    <div className="bg-[#282C33] flex gap-8 flex-col md:hidden">
    <Sheet >
      <SheetTrigger asChild>
      <PanelsTopLeft className="h-5 w-5 text-[#ABB2BF] hover:text-[#C778DD]" />
      </SheetTrigger>
      <SheetContent className="bg-[#282C33]">
        <SheetHeader>
          <SheetTitle className="text-2xl"><span className="text-[#C778DD] flex gap-2"> # <p className="text-white">Menu</p></span></SheetTitle>
         
        </SheetHeader>
        <div className="mt-4">

        <Linx/>
        </div>
        
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}
