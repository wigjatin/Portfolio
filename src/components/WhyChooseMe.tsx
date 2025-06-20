
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, LightbulbIcon, RocketIcon, HeartHandshake } from "lucide-react";

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: <RocketIcon className="w-8 h-8 text-brand-purple" />,
      title: "Innovation Focused",
      description: "I leverage cutting-edge AI technologies to solve complex problems with innovative approaches.",
      badges: ["Research", "Experimentation", "Forward-thinking"]
    },
    {
      icon: <Award className="w-8 h-8 text-brand-purple" />,
      title: "Result Driven",
      description: "My solutions are designed to deliver measurable outcomes and tangible business value.",
      badges: ["Performance", "Metrics", "ROI"]
    },
    {
      icon: <LightbulbIcon className="w-8 h-8 text-brand-purple" />,
      title: "Deep Expertise",
      description: "With specialized knowledge in machine learning and AI, I bring depth of understanding to every project.",
      badges: ["Specialization", "Domain Knowledge", "Technical Excellence"]
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-purple" />,
      title: "Collaborative Approach",
      description: "I work closely with clients, ensuring solutions align perfectly with their vision and requirements.",
      badges: ["Communication", "Teamwork", "Client-focused"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-brand-light-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple">
            Why Choose Me?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            I bring a unique combination of technical expertise and creative problem-solving to deliver exceptional AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-transparent overflow-hidden relative">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-brand-light-purple/30 blur-2xl"></div>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-brand-light-purple/30 rounded-lg">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-gray-600 mb-4">{reason.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {reason.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="bg-gray-100 text-gray-700">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 font-medium italic max-w-3xl mx-auto">
            "My commitment is to deliver not just technical solutions, but transformative experiences that drive your business forward with the power of artificial intelligence."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
