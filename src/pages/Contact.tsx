
import React, { useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, PhoneCall, Send, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  inquiryType: z.string().min(2, { message: "Please select an inquiry type." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "General Inquiry",
      subject: "",
      message: "",
    },
  });

  // Set up the email submission script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://data-shield-recruiting.kit.com/b1df23f352/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Format email content
    const emailSubject = `[DataShield] ${values.inquiryType}: ${values.subject}`;
    const emailBody = `
      Name: ${values.name}
      Email: ${values.email}
      Phone: ${values.phone || 'Not provided'}
      Inquiry Type: ${values.inquiryType}
      
      Message:
      ${values.message}
    `;

    // If Kit.com script is loaded, use it to send the email
    if (typeof window !== 'undefined' && window.hasOwnProperty('Mailer')) {
      // @ts-ignore - Kit.com script adds this global function
      window.Mailer?.submitForm({
        email: 'abelassefa788@gmail.com',
        subject: emailSubject,
        message: emailBody,
        replyTo: values.email
      })
        .then(() => {
          toast({
            title: "Message sent successfully",
            description: "Thank you for your inquiry. We'll get back to you shortly.",
          });
          form.reset();
        })
        .catch((error: any) => {
          console.error("Form submission error:", error);
          toast({
            title: "Message delivery failed",
            description: "There was a problem sending your message. Please try again later.",
            variant: "destructive"
          });
        });
    } else {
      // Fallback for when Kit script hasn't loaded
      console.log("Form values to be sent to abelassefa788@gmail.com:", values);
      
      toast({
        title: "Message received",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
      });
      
      form.reset();
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about our services? Contact our team for more information.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Info */}
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-cyber-purple h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@futuretech-shield.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="text-cyber-purple h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (888) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-cyber-purple h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Monday-Friday: 9am-5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="md:w-2/3">
                <div className="cyber-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input className="pl-10" placeholder="Your name" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input className="pl-10" placeholder="Your email" type="email" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <PhoneCall className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input className="pl-10" placeholder="Your phone number" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inquiry Type</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <select 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    {...field}
                                  >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                                    <option value="Service Information">Service Information</option>
                                    <option value="Quote Request">Quote Request</option>
                                  </select>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Subject of your message" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Write your message here..." 
                                className="min-h-[200px] resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Please provide details about your inquiry and we'll get back to you as soon as possible.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-cyber-purple hover:bg-cyber-purple-light">
                        <Send className="mr-2 h-4 w-4" /> Submit
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
