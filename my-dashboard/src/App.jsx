import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bar, Pie, Line } from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Image, Video, Mic } from "lucide-react";
import React from "react";
import Tab from "./components/Tab"; // ✅ Adjust the path based on your project structure

export default function SocialMediaDashboard() {
  const [data, setData] = useState({
    sentiment: [
      { name: "Positive", value: 60 },
      { name: "Negative", value: 25 },
      { name: "Neutral", value: 15 },
    ],
    topics: [
      { name: "AI", value: 40 },
      { name: "Blockchain", value: 30 },
      { name: "Metaverse", value: 20 },
      { name: "Web3", value: 10 },
    ],
    trendData: [
      { name: "Day 1", engagement: 100 },
      { name: "Day 2", engagement: 200 },
      { name: "Day 3", engagement: 150 },
      { name: "Day 4", engagement: 300 },
    ],
    imageAnalytics: [
      { category: "Logos Detected", value: 50 },
      { category: "Faces Detected", value: 80 },
    ],
    videoAnalytics: [
      { category: "Frames Processed", value: 200 },
      { category: "Object Detections", value: 120 },
    ],
    audioAnalytics: [
      { category: "Speech Transcriptions", value: 90 },
      { category: "Brand Mentions", value: 30 },
    ],
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Social Media Analytics</h1>
      
      <Tabs>
        <Tab label="Sentiment Analysis">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Overall Sentiment</h2>
              <Pie data={data.sentiment} dataKey="value" nameKey="name" fill="#8884d8" />
            </CardContent>
          </Card>
        </Tab>
        
        <Tab label="Trending Topics">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Trending Topics</h2>
              <Bar data={data.topics} dataKey="value" nameKey="name" fill="#82ca9d" />
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Engagement Trends">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Engagement Over Time</h2>
              <Line data={data.trendData} dataKey="engagement" nameKey="name" stroke="#ff7300" />
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Image Analytics">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Image Content Insights</h2>
              <Bar data={data.imageAnalytics} dataKey="value" nameKey="category" fill="#ffcc00" />
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Video Analytics">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Video Processing Insights</h2>
              <Bar data={data.videoAnalytics} dataKey="value" nameKey="category" fill="#ff5733" />
            </CardContent>
          </Card>
        </Tab>

        <Tab label="Audio Analytics">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Audio Sentiment & Mentions</h2>
              <Bar data={data.audioAnalytics} dataKey="value" nameKey="category" fill="#3399ff" />
            </CardContent>
          </Card>
        </Tab>
      </Tabs>

      <div className="mt-6 flex gap-4">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">Refresh Data</Button>
        <Button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <Search size={16} /> Search Trends
        </Button>
      </div>
    </div>
  );
};