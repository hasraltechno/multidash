import { Tabs, TabsContent, TabsList, TabsTrigger } from "@multidash/ui/components/tabs"

export default function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-lg border p-4 text-sm">
        A summary of your store's performance.
      </TabsContent>
      <TabsContent value="analytics" className="rounded-lg border p-4 text-sm">
        Traffic, conversion and retention metrics.
      </TabsContent>
      <TabsContent value="reports" className="rounded-lg border p-4 text-sm">
        Download monthly and quarterly reports.
      </TabsContent>
    </Tabs>
  )
}
