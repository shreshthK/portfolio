import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { skill: "Angular", years: 8 },
  { skill: "React", years: 6 },
  { skill: "PostgreSQL", years: 6 },
  { skill: "Node.js", years: 5 },
  { skill: "TypeScript", years: 4 },
]

const colors = [
  "hsl(221, 83%, 53%)",
  "hsl(262, 83%, 58%)",
  "hsl(173, 58%, 39%)",
  "hsl(43, 74%, 50%)",
  "hsl(340, 75%, 55%)",
]

const chartConfig = {
  years: {
    label: "Years of Experience",
  },
} satisfies ChartConfig

export default function DemoGraph() {
  return (
    <motion.div
      className="flex justify-center items-center py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Card className="w-full max-w-lg bg-card border-gray-200 dark:border-neutral-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl dark:text-white">Skills Proficiency</CardTitle>
          <CardDescription>Years of professional experience</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ left: 20, right: 30, top: 10, bottom: 10 }}
            >
              <YAxis
                dataKey="skill"
                type="category"
                tickLine={false}
                axisLine={false}
                width={80}
                tick={{ fill: 'currentColor', fontSize: 12 }}
              />
              <XAxis
                type="number"
                domain={[0, 10]}
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'currentColor', fontSize: 11 }}
                tickFormatter={(value) => `${value} yrs`}
              />
              <ChartTooltip
                cursor={{ fill: 'rgba(0,0,0,0.1)' }}
                content={<ChartTooltipContent />}
              />
              <Bar dataKey="years" radius={[0, 4, 4, 0]} barSize={24}>
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}
