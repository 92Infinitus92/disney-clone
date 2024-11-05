"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const searchSchema = z.object({
  searchTerm: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" })
    .max(50, { message: "Please enter a maximum of 50 characters" }),
});

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });
  function onSubmit(values: z.infer<typeof searchSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push(`/search/${values.searchTerm}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default SearchInput;
