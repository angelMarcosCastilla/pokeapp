"use client";
import { BASE_IMG_URL } from "@/config";
import { Stats } from "@/types/pokemon";
import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { extractColors } from 'extract-colors'

interface Props {
  name: string;
  data: Stats[],
  id: number;
}



export default function RadarChartPokemon({ name, data, id }: Props) {
  const [color, setColor] = useState("")
  const parsedData = data.map(stat => ({
    subject: stat.stat.name,
    [name]: stat.base_stat  
  }))

  useEffect(() => {

    const loadImage = async () => {
      try {
        const response = await fetch(`${BASE_IMG_URL}/${id}.png`);
        const blob = await response.blob();
        const image = new Image();

        image.src = URL.createObjectURL(blob);

        image.onload = () => {
          extractColors(image)
          .then(colors => {
            const colorPokemon = colors.toSorted((a,b) => b.area   - a.area)[0].hex;
            setColor(colorPokemon)

          })
          .catch(console.error)
        };
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, []);
  
  return (
    <ResponsiveContainer className="w-96 h-96">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={parsedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name={name}
          dataKey={name}
          stroke={color}
          fill={color}
          fillOpacity={0.5}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
