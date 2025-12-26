"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Code,
  Cpu,
  Cloud,
  Database,
  Server,
  Bolt,
  Box,
  Layers,
  HardDrive,
  Terminal,
} from "lucide-react";

interface TechCard {
  name: string;
  icon: React.ReactNode;
}

interface TechTab {
  title: string;
  key: string;
  cards: TechCard[];
}

const techTabs: TechTab[] = [
  {
    title: "Native Mobile Architectures",
    key: "native",
    cards: [
      { name: "SWIFT", icon: <Code size={36} /> },
      { name: "SwiftUI", icon: <Smartphone size={36} /> },
      { name: "Combine", icon: <Cloud size={36} /> },
      { name: "Objective-C", icon: <Code size={36} /> },
      { name: "Kotlin", icon: <Code size={36} /> },
      { name: "Jetpack Compose", icon: <Cpu size={36} /> },
      { name: "Coroutines", icon: <Bolt size={36} /> },
      { name: "RxJava", icon: <Box size={36} /> },
    ],
  },
  {
    title: "Cross-Platform & Hybrid",
    key: "cross-platform",
    cards: [
      { name: "Flutter", icon: <Layers size={36} /> },
      { name: "Dart", icon: <Code size={36} /> },
      { name: "React Native", icon: <Smartphone size={36} /> },
      { name: "TypeScript", icon: <Code size={36} /> },
      { name: ".NET MAUI", icon: <Cpu size={36} /> },
      { name: "Capacitor", icon: <Terminal size={36} /> },
      { name: "Ionic", icon: <Box size={36} /> },
      { name: "PWA", icon: <Layers size={36} /> },
    ],
  },
  {
    title: "Backend & Microservices",
    key: "backend",
    cards: [
      { name: "Node.JS", icon: <Server size={36} /> },
      { name: "Python", icon: <Code size={36} /> },
      { name: "Django", icon: <Database size={36} /> },
      { name: "Go", icon: <Cpu size={36} /> },
      { name: "FastAPI", icon: <Cloud size={36} /> },
      { name: "Java Spring Boot", icon: <Server size={36} /> },
      { name: ".NET Core", icon: <Cpu size={36} /> },
      { name: "GraphQL", icon: <Layers size={36} /> },
      { name: "Microservices", icon: <HardDrive size={36} /> },
      { name: "Event-Driven", icon: <Bolt size={36} /> },
      { name: "Serverless", icon: <Cloud size={36} /> },
    ],
  },
  {
    title: "Data Persistence & Caching",
    key: "data",
    cards: [
      { name: "Realm", icon: <Database size={36} /> },
      { name: "SQLite", icon: <Database size={36} /> },
      { name: "Room", icon: <HardDrive size={36} /> },
      { name: "Core Data", icon: <Database size={36} /> },
      { name: "Redis", icon: <Bolt size={36} /> },
      { name: "Memcached", icon: <Box size={36} /> },
      { name: "PostgreSQL", icon: <Database size={36} /> },
      { name: "MongoDB", icon: <Database size={36} /> },
      { name: "Amazon DynamoDB", icon: <Cloud size={36} /> },
      { name: "Firestore", icon: <Cloud size={36} /> },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("native");

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Cutting-Edge Technology Stack for Next-Gen Mobile Solutions
        </h2>
        <p className="mb-12 text-gray-600">
          Our expert team leverages the most reliable and modern technologies to
          deliver mobile applications that are fast, scalable, and secure. From
          native platforms to cross-platform frameworks, we harness the best
          tools to turn your ideas into exceptional digital experiences.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {techTabs.map((tab) => (
            <button
              key={tab.key}
              className={`
        px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
        shadow-md
        ${
          activeTab === tab.key
            ? "bg-blue-600 text-white shadow-lg transform scale-105"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-600"
        }
      `}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {techTabs
            .find((tab) => tab.key === activeTab)!
            .cards.map((card) => (
              <div
                key={card.name}
                className="flex flex-col items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors duration-300"
              >
                <div className="text-4xl">{card.icon}</div>
                <span className="text-center font-medium">{card.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
