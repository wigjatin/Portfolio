
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const publications = [
  {
    id: 1,
    title: "Beyond GPT: Understanding the Advancements and Challenges in Large Language Models",
    abstract: "LLMs (Large Language Models) are game-changers for natural language processing, enabling fluent text generation, code completion, and automation across multiple industries. Focusing on models beyond the GPT architecture, this study examines the foundations, advancements, challenges, and future directions of large language models. We will analyze the role of the transformer architecture in modern LLMs, highlight industry-specific applications, assess computational costs, and address key limitations, including bias and hallucination-related phenomena.",
    authors: ["Jatin Wig"],
    journal: "Zenodo Digital Repository",
    year: "2025",
    doi: "10.5281/zenodo.15224989",
    url: "https://zenodo.org/records/15224989",
    keywords: ["Large Language Models", "Natural Language Processing", "Transformer Architecture", "AI Ethics", "Computational Linguistics"],
    type: "Thesis"
  }
];

const Publications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple"
          >
            Research & Publications
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Contributing to the advancement of AI and machine learning through research and open science.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8"
        >
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              custom={index}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-none shadow-lg group">
                <CardHeader className="bg-gradient-to-r from-brand-light-purple/20 to-brand-purple/10 pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-brand-purple" />
                      <span className="text-sm font-medium text-brand-purple bg-white/80 px-3 py-1 rounded-full">
                        {publication.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{publication.year}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple">
                    {publication.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-gray-600 text-sm">
                      {publication.authors.join(", ")}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Abstract</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Keywords</h4>
                    <div className="flex gap-2 flex-wrap">
                      {publication.keywords.map((keyword) => (
                        <motion.span 
                          key={keyword} 
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#f9f5ff"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {keyword}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Published in:</span> {publication.journal}
                    </div>
                    <div>
                      <span className="font-medium">DOI:</span> {publication.doi}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t bg-gray-50/50">
                  <div className="flex justify-end items-center w-full">
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="rounded-full bg-gradient-to-r from-brand-purple to-brand-vivid-purple hover:opacity-90 hover:shadow-lg transition-all duration-300"
                        onClick={() => window.open(publication.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Publication
                      </Button>
                    </motion.div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
