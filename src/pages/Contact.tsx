
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, PhoneCall, Send, MessageSquare, User, FileText } from 'lucide-react';
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
  topic: z.string().min(2, { message: "Please select a topic." }),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
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
      topic: "Content Submission",
      title: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a server
    console.log(values);
    
    toast({
      title: "Submission received",
      description: "Thank you for your content submission. We'll review it shortly.",
    });
    
    form.reset();
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
                Submit your industry insights or contact our team for more information.
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
                      <p className="font-medium">Content Submissions</p>
                      <p className="text-muted-foreground">Share your industry insights and thought leadership using the form.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="md:w-2/3">
                <div className="cyber-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Submit Your Insights</h2>
                  
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
                          name="topic"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Submission Type</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <select 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    {...field}
                                  >
                                    <option value="Content Submission">Content Submission</option>
                                    <option value="Guest Post">Guest Post</option>
                                    <option value="Industry Report">Industry Report</option>
                                    <option value="Case Study">Case Study</option>
                                    <option value="General Inquiry">General Inquiry</option>
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
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Title of your submission" {...field} />
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
                                placeholder="Write your message or content submission here..." 
                                className="min-h-[200px] resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Share your insights, article draft, or inquiries. For longer submissions, you can mention file attachments and we'll contact you.
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
