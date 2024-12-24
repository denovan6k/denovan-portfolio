import axios from 'axios';
import {z} from 'zod';
import { formSchema } from '../components/editForm';
import { toast } from "sonner";

import { BadgeCheck,CircleX } from "lucide-react";




export async function sendEmail(data: z.infer<typeof formSchema>) {
  try {
    const response = await axios.post('/api/email', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response.data);
    
    if (response.status === 200) {
      console.log('Thank you for contacting us!');
      toast("Email sent successfully", {
        description: "The email has been sent successfully",
        icon: <BadgeCheck className="text-[#002603]" />,  });
      return response.data;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Client Error:', err.response?.data || err.message);
      toast("Fill in details correctly", {
        description: "Failed to send email, please try again",
        icon: <CircleX className="text-red-500" />,  });

    } else {
      console.error('Unexpected Error:', err);
      toast("Unexpected Error", {
        description: "Please try again",
        icon: <CircleX className="text-[#FF0000]" />,  });
    }
  }
}
