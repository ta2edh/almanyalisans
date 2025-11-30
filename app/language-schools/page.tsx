"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Languages,
  MapPin,
  Euro,
  Search,
  BookOpen,
  Clock,
  AlertTriangle,
} from "lucide-react"

interface LanguageSchool {
  id: number
  name: string
  city: string
  state: string
  monthlyFee: number
  intensiveCourse: boolean
  levels: string[]
}

export default function LanguageSchoolsPage() {
  const [schools, setSchools] = useState<LanguageSchool[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [priceFilter, setPriceFilter] = useState<string>("all")
  const [showMockupAlert, setShowMockupAlert] = useState(true)

  useEffect(() => {
    fetch('/language-schools.json')
      .then(res => res.json())
      .then(data => setSchools(data))
  }, [])

  const states = Array.from(new Set(schools.map(s => s.state))).sort()

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "all" || school.state === selectedState
    const matchesPrice = priceFilter === "all" ||
                        (priceFilter === "budget" && school.monthlyFee < 300) ||
                        (priceFilter === "mid" && school.monthlyFee >= 300 && school.monthlyFee < 400) ||
                        (priceFilter === "premium" && school.monthlyFee >= 400)
    
    return matchesSearch && matchesState && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Languages className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Almanya Dil Kursları</h1>
                <p className="text-sm text-gray-600">{schools.length} dil okulu listelendi</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <a href="/">← Ana Sayfa</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mockup Data Alert */}
      {showMockupAlert && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-start gap-3 bg-white border border-amber-300 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-amber-900 mb-1">⚠️ Test Verileri</p>
                <p className="text-sm text-amber-800">
                  Bu sayfa henüz tamamlanmamıştır. Gösterilen dil okulu bilgileri <strong>mockup (örnek)</strong> verilerdir ve güncel olmayabilir.
                </p>
              </div>
              <button
                onClick={() => setShowMockupAlert(false)}
                className="text-amber-600 hover:text-amber-800 font-bold text-xl shrink-0"
                aria-label="Kapat"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Dil okulu veya şehir ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* State Filter */}
            <div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tüm Eyaletler</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tüm Fiyatlar</option>
                <option value="budget">Ekonomik ({"<"}300€)</option>
                <option value="mid">Orta (300-400€)</option>
                <option value="premium">Premium ({">"}400€)</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedState !== "all" || priceFilter !== "all") && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Arama: {searchTerm}
                  <button onClick={() => setSearchTerm("")} className="hover:text-blue-900">×</button>
                </span>
              )}
              {selectedState !== "all" && (
                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {selectedState}
                  <button onClick={() => setSelectedState("all")} className="hover:text-purple-900">×</button>
                </span>
              )}
              {priceFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {priceFilter === "budget" ? "Ekonomik" : priceFilter === "mid" ? "Orta" : "Premium"}
                  <button onClick={() => setPriceFilter("all")} className="hover:text-green-900">×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Schools List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aramanıza uygun dil okulu bulunamadı.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map(school => (
                <Card key={school.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="space-y-4">
                      {/* School Name */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                        {school.intensiveCourse && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                            <Clock className="w-3 h-3 inline mr-1" />
                            Yoğun Kurs
                          </span>
                        )}
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{school.city}</p>
                          <p className="text-gray-600">{school.state}</p>
                        </div>
                      </div>

                      {/* Monthly Fee */}
                      <div className="flex items-start gap-2">
                        <Euro className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="text-gray-600">Aylık Kurs Ücreti</p>
                          <p className="font-bold text-2xl text-blue-600">{school.monthlyFee}€</p>
                        </div>
                      </div>

                      {/* Available Levels */}
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-4 h-4 text-gray-500" />
                          <p className="text-xs text-gray-500 font-medium">Verilen Seviyeler:</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {school.levels.map((level, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded font-medium"
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info Note */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex gap-3">
              <Languages className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-2">Önemli Notlar:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>• Fiyatlar aylık yoğun kurs (intensive course) için ortalama ücretlerdir.</li>
                  <li>• Kayıt ücreti, materyal ücreti gibi ek masraflar olabilir.</li>
                  <li>• Kurs süresi genellikle 4 hafta (ayda 80-100 saat) civarındadır.</li>
                  <li>• Güncel fiyatlar için dil okulunun resmi web sitesini kontrol edin.</li>
                  <li>• Bazı okullar öğrenci indirimi veya erken kayıt indirimi sunabilir.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
