"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Save,
  Plus,
  Edit2,
  Trash2,
  Bold,
  Italic,
  List,
  Link,
} from "lucide-react";
import { toast } from "sonner";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function Page() {
  const [storyContent, setStoryContent] =
    useState(`Welcome to our company! We are a passionate team dedicated to delivering exceptional solutions that make a difference in people's lives.

Our journey began in 2020 with a simple vision: to create innovative products that solve real-world problems. Since then, we've grown into a trusted partner for businesses and individuals alike.

We believe in the power of collaboration, creativity, and continuous improvement. Our team brings together diverse expertise and perspectives to tackle challenges and create meaningful impact.`);

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including web development, mobile applications, and digital consulting to help businesses grow and succeed.",
    },
    {
      id: "2",
      question: "How can I get in touch with your team?",
      answer:
        "You can reach us through our contact form, email us directly, or schedule a consultation call. We typically respond within 24 hours.",
    },
    {
      id: "3",
      question: "What makes your company different?",
      answer:
        "Our commitment to quality, personalized approach, and focus on long-term partnerships set us apart. We work closely with each client to understand their unique needs.",
    },
  ]);

  const [editingFaq, setEditingFaq] = useState<string | null>(null);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [showAddFaq, setShowAddFaq] = useState(false);

  const handleSave = () => {
    toast("Content Saved");
  };

  const handleAddFaq = () => {
    if (newFaq.question.trim() && newFaq.answer.trim()) {
      const faq: FAQ = {
        id: Date.now().toString(),
        question: newFaq.question,
        answer: newFaq.answer,
      };
      setFaqs([...faqs, faq]);
      setNewFaq({ question: "", answer: "" });
      setShowAddFaq(false);
      toast("New FAQ has been added successfully.");
    }
  };

  const handleDeleteFaq = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
    toast("FAQ has been Deleted successfully.");
  };

  const handleUpdateFaq = (id: string, question: string, answer: string) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, question, answer } : faq))
    );
    setEditingFaq(null);
    toast(" FAQ has been Updated successfully.");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-family-fredoka">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-primary font-sora">
            MyfitHub Website Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your MyfitHub website contents
          </p>
        </div>
        <Button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="space-y-8">
        {/* Story Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-sora">
              <Edit2 className="w-5 h-5 text-primary" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Text Formatting Toolbar */}
            <div className="flex flex-wrap gap-2 p-2 bg-muted rounded-md">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Bold className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Italic className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <List className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Link className="w-4 h-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Badge variant="secondary" className="text-xs">
                {storyContent.length} characters
              </Badge>
            </div>

            <Textarea
              value={storyContent}
              onChange={(e) => setStoryContent(e.target.value)}
              placeholder="Tell your company's story..."
              className="min-h-[300px] resize-none text-sm leading-relaxed"
            />
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <List className="w-5 h-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
              <Button
                onClick={() => setShowAddFaq(true)}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add FAQ
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Add New FAQ Form */}
            {showAddFaq && (
              <Card className="mb-6 border-primary/20">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label htmlFor="new-question">Question</Label>
                    <Input
                      id="new-question"
                      value={newFaq.question}
                      onChange={(e) =>
                        setNewFaq({ ...newFaq, question: e.target.value })
                      }
                      placeholder="Enter the question..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-answer">Answer</Label>
                    <Textarea
                      id="new-answer"
                      value={newFaq.answer}
                      onChange={(e) =>
                        setNewFaq({ ...newFaq, answer: e.target.value })
                      }
                      placeholder="Enter the answer..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAddFaq} size="sm">
                      Add FAQ
                    </Button>
                    <Button
                      onClick={() => {
                        setShowAddFaq(false);
                        setNewFaq({ question: "", answer: "" });
                      }}
                      variant="outline"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQ List */}
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full mr-4">
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingFaq(faq.id);
                          }}
                          className="h-8 w-8 p-0 text-primary hover:text-primary/80"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteFaq(faq.id);
                          }}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    {editingFaq === faq.id ? (
                      <EditFaqForm
                        faq={faq}
                        onSave={handleUpdateFaq}
                        onCancel={() => setEditingFaq(null)}
                      />
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {faqs.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <List className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>
                  No FAQs added yet. Click &quot;Add FAQ&quot; to get started.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function EditFaqForm({
  faq,
  onSave,
  onCancel,
}: {
  faq: FAQ;
  onSave: (id: string, question: string, answer: string) => void;
  onCancel: () => void;
}) {
  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor={`edit-question-${faq.id}`}>Question</Label>
        <Input
          id={`edit-question-${faq.id}`}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor={`edit-answer-${faq.id}`}>Answer</Label>
        <Textarea
          id={`edit-answer-${faq.id}`}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mt-1 min-h-[100px]"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={() => onSave(faq.id, question, answer)} size="sm">
          Save Changes
        </Button>
        <Button onClick={onCancel} variant="outline" size="sm">
          Cancel
        </Button>
      </div>
    </div>
  );
}
