'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendEmail } from "../action/emailAction";
import { Textarea } from "@/components/ui/textarea"


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    
    FormMessage,
  } from "@/components/ui/form";
// Form validation schema
export const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }), // Ensure name is a non-empty string
    email: z.string().email({ message: "Invalid email address" }),
    title: z.string().min(1, { message: "Title is required" }), // Ensure email is a valid email format
    message: z.string().min(10, { message: "Message should be at least 10 characters long" }) // Ensure message has a minimum length of 10 characters
  });
export default function EditForm() {

        const form = useForm<z.infer<typeof formSchema>>({
                resolver: zodResolver(formSchema),
                defaultValues: {
                  name: '', 
                  email: '',
                  title: '',
                  message: ''
            
                },
              });

      const handleSubmit = async (value: z.infer<typeof formSchema>) => {
                
       
        
         console.log(value)
         try{
          await sendEmail(value);

         }catch(err){
          console.log(err)
         }
       
         

          }


    return (
      <div className="flex items-center p-2 ">
        <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className=" w-full max-w-md space-y-4 "
              >
              

                <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      
                      <FormItem className="">
                        <div className="">
                        
                        <FormControl>
                          <Input placeholder= {'John Doe'} type="text" {...field} className="bg-transparent border border-[#ABB2BF] text-white placeholder-[#ABB2BF] rounded p-2 w-full" />
                        </FormControl>
                        </div>            
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                      <div className="">
                        {/* <FormLabel>First name</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder= {'johndoe@gmail.com'}
                            type="email"
                            {...field}
                            className="bg-transparent  border border-[#ABB2BF] text-white truncate  placeholder-[#ABB2BF] rounded p-2 w-full" />
                        </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                </div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="">
                    
                        <FormControl>
                          <Input
                            placeholder= {"Project Proposal"}
                            type="text"
                            {...field}
                            className="bg-transparent border border-[#ABB2BF] text-white placeholder-[#ABB2BF] rounded p-2 w-full" />
                        </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="">
                    
                        <FormControl>
                          <Textarea
                            placeholder= {"I would like to discuss a project proposal."}
                            
                            {...field}
                            className="bg-transparent border text-wrap border-[#ABB2BF] text-white placeholder-[#ABB2BF] rounded p-2 w-full h-32" />
                        </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-normal py-2 px-4 rounded">
                  Send
                </Button>
                </div>
              </form>
            </Form>
      </div>
    )
  }
  

