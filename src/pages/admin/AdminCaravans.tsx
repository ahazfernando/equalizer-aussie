"use client";

import { useState } from "react";
import { caravans } from "@/data/caravans";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminCaravans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [caravanList, setCaravanList] = useState(caravans);

  const filteredCaravans = caravanList.filter(
    (caravan) =>
      caravan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caravan.series.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFeatured = (id: string) => {
    setCaravanList(
      caravanList.map((c) =>
        c.id === id ? { ...c, featured: !c.featured } : c
      )
    );
  };

  const toggleAvailable = (id: string) => {
    setCaravanList(
      caravanList.map((c) =>
        c.id === id ? { ...c, available: !c.available } : c
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">Caravan Management</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your caravan inventory and listings
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add New Caravan
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search caravans by name or series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="admin-card p-4">
          <p className="text-sm text-muted-foreground">Total Caravans</p>
          <p className="text-2xl font-bold mt-1">{caravanList.length}</p>
        </div>
        <div className="admin-card p-4">
          <p className="text-sm text-muted-foreground">Featured</p>
          <p className="text-2xl font-bold mt-1">
            {caravanList.filter((c) => c.featured).length}
          </p>
        </div>
        <div className="admin-card p-4">
          <p className="text-sm text-muted-foreground">Available</p>
          <p className="text-2xl font-bold mt-1">
            {caravanList.filter((c) => c.available).length}
          </p>
        </div>
        <div className="admin-card p-4">
          <p className="text-sm text-muted-foreground">Unavailable</p>
          <p className="text-2xl font-bold mt-1">
            {caravanList.filter((c) => !c.available).length}
          </p>
        </div>
      </div>

      {/* Caravans Table */}
      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Caravan
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Series
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Price
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCaravans.map((caravan) => (
                <tr
                  key={caravan.id}
                  className="border-b border-border/50 hover:bg-secondary/30"
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium">{caravan.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {caravan.length} • {caravan.berth} berth
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline">{caravan.series}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium">
                      ${caravan.price.toLocaleString()}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-1">
                      {caravan.featured && (
                        <Badge className="bg-accent text-accent-foreground w-fit">
                          Featured
                        </Badge>
                      )}
                      <Badge
                        variant={caravan.available ? "default" : "secondary"}
                        className="w-fit"
                      >
                        {caravan.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFeatured(caravan.id)}
                        title={caravan.featured ? "Remove from featured" : "Add to featured"}
                      >
                        {caravan.featured ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleAvailable(caravan.id)}
                        title={caravan.available ? "Mark unavailable" : "Mark available"}
                      >
                        {caravan.available ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredCaravans.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No caravans found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}



