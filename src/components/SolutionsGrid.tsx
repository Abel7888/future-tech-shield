
import React from 'react';
import { Lock, UserCheck, AlertTriangle, FileCode, Wifi, Cpu, BarChart3, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    title: "Data Encryption",
    description: "Advanced encryption technologies to protect sensitive data at rest and in transit.",
    icon: Lock,
    badge: "Core",
    color: "bg-green-500/20 text-green-500"
  },
  {
    title: "Digital Identity Verification",
    description: "Biometric and multi-factor authentication solutions for secure identity management.",
    icon: UserCheck,
    badge: "Auth",
    color: "bg-blue-500/20 text-blue-500"
  },
  {
    title: "AI Spoofing Protection",
    description: "Detection mechanisms against increasingly sophisticated AI-driven threats.",
    icon: AlertTriangle,
    badge: "AI",
    color: "bg-orange-500/20 text-orange-500"
  },
  {
    title: "Application Security",
    description: "Tools and frameworks for secure application development and operations.",
    icon: FileCode,
    badge: "DevSecOps",
    color: "bg-purple-500/20 text-purple-500"
  },
  {
    title: "IoT Security",
    description: "Specialized protection for connected devices and industrial systems.",
    icon: Wifi,
    badge: "IoT",
    color: "bg-indigo-500/20 text-indigo-500"
  },
  {
    title: "Quantum Security",
    description: "Future-proofed encryption methods for the post-quantum computing era.",
    icon: Cpu,
    badge: "Quantum",
    color: "bg-cyan-500/20 text-cyan-500"
  },
  {
    title: "AI Risk Assessment",
    description: "Tools to evaluate and mitigate risks in AI-driven systems and automated processes.",
    icon: BarChart3,
    badge: "Risk",
    color: "bg-red-500/20 text-red-500"
  },
  {
    title: "Blockchain Security",
    description: "Protection mechanisms for distributed ledger technologies and smart contracts.",
    icon: Database,
    badge: "Blockchain",
    color: "bg-yellow-500/20 text-yellow-500"
  }
];

const SolutionsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-cyber-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovative Security Solutions
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Explore our cutting-edge technologies addressing the most critical security challenges in emerging tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="cyber-card hover:translate-y-[-4px]">
              <CardHeader className="pb-2">
                <div className="mb-3">
                  <Badge variant="outline" className={`${solution.color} border-none`}>
                    {solution.badge}
                  </Badge>
                </div>
                <div className="h-12 w-12 rounded-lg bg-cyber-blue flex items-center justify-center mb-4">
                  <solution.icon size={24} className="text-cyber-cyan" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-cyber-purple-light hover:text-cyber-purple">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
