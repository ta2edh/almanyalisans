"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  MapPin,
  Euro,
  Languages,
  Search,
  AlertTriangle,
} from "lucide-react"

interface University {
  id: number
  name: string
  city: string
  state: string
  minLanguageLevel: string
  semesterFee: number
  tuitionFree: boolean
  programs: string[]
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [languageFilter, setLanguageFilter] = useState<string>("all")
  const [showMockupAlert, setShowMockupAlert] = useState(true)

  useEffect(() => {
    fetch('/universities.json')
      .then(res => res.json())
      .then(data => setUniversities(data))
  }, [])

  const states = Array.from(new Set(universities.map(u => u.state))).sort()

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "all" || uni.state === selectedState
    const matchesLanguage = languageFilter === "all" || 
                           (languageFilter === "no-requirement" && uni.minLanguageLevel.includes("yok")) ||
                           (languageFilter === "with-requirement" && !uni.minLanguageLevel.includes("yok"))
    
    return matchesSearch && matchesState && matchesLanguage
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Almanya Üniversite Veritabanı</h1>
                <p className="text-sm text-gray-600">{universities.length} üniversite listelendi</p>
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
                  Bu sayfa henüz tamamlanmamıştır. Gösterilen üniversite bilgileri <strong>mockup (örnek)</strong> verilerdir ve güncel olmayabilir.
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
                placeholder="Üniversite veya şehir ara..."
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

            {/* Language Filter */}
            <div>
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tüm Dil Seviyeleri</option>
                <option value="no-requirement">Başvuruda Dil Belgesi Yok</option>
                <option value="with-requirement">Dil Belgesi Gerekli</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedState !== "all" || languageFilter !== "all") && (
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
              {languageFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {languageFilter === "no-requirement" ? "Dil Belgesi Yok" : "Dil Belgesi Gerekli"}
                  <button onClick={() => setLanguageFilter("all")} className="hover:text-green-900">×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Universities List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aramanıza uygun üniversite bulunamadı.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredUniversities.map(uni => (
                <Card key={uni.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="space-y-4">
                      {/* University Name */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{uni.name}</h3>
                        {uni.minLanguageLevel.includes("yok") && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                            ⭐ Dil Belgesi Gerekmiyor
                          </span>
                        )}
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{uni.city}</p>
                          <p className="text-gray-600">{uni.state}</p>
                        </div>
                      </div>

                      {/* Language Requirement */}
                      <div className="flex items-start gap-2">
                        <Languages className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="text-gray-600">Minimum Dil Seviyesi</p>
                          <p className="font-medium text-gray-900">{uni.minLanguageLevel}</p>
                        </div>
                      </div>

                      {/* Semester Fee */}
                      <div className="flex items-start gap-2">
                        <Euro className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="text-gray-600">Dönemlik Ücret</p>
                          <p className="font-medium text-gray-900">
                            {uni.semesterFee}€
                            {uni.tuitionFree && (
                              <span className="ml-2 text-green-600 text-xs">(Eğitim Ücretsiz)</span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Programs */}
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">Popüler Bölümler:</p>
                        <div className="flex flex-wrap gap-1">
                          {uni.programs.map((program, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                            >
                              {program}
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
              <GraduationCap className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-2">Önemli Notlar:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>• Dönemlik ücretler sadece katkı payıdır, eğitim ücretini kapsamaz (çoğu ücretsiz).</li>
                  <li>• "Başvuruda dil belgesi yok" yazanlar kabul sonrası dil kursuna kayıt gerektirir.</li>
                  <li>• Bilgiler 2025 yılına göre güncellenmiştir, değişiklik olabilir.</li>
                  <li>• Detaylı bilgi için mutlaka üniversitenin resmi web sitesini kontrol edin.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
