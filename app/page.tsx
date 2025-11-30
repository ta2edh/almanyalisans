"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Comments from "@/components/comments"
import {
  CheckCircle2,
  XCircle,
  GraduationCap,
  FileText,
  Globe,
  Building2,
  Plane,
  AlertTriangle,
  CheckSquare,
  MessageSquare,
  Languages,
} from "lucide-react"

export default function GermanyStudyGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center space-y-8">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-tight text-gray-900">
              Almanya'da Lisans Başvurusu
              <br />
              <span className="text-blue-600">Artık Çok Kolay</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl font-bold text-gray-700">
              <span className="bg-red-100 px-3 py-1 rounded-lg text-red-600 line-through">20.000₺ - 50.000₺</span>
              <span className="mx-3">→</span>
              <span className="bg-green-100 px-3 py-1 rounded-lg text-green-600">0₺</span>
            </p>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Danışmanlara binlerce lira ödeme. <strong className="text-gray-900">Tüm işlemleri kendin yap,</strong> parasını cebinde tut.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-12 py-7 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 font-bold"
                asChild
              >
                <a href="#steps">
                  Ücretsiz Başla →
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all font-semibold text-blue-700"
                asChild
              >
                <a href="/universities">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Üniversite Listesi
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all font-semibold text-purple-700"
                asChild
              >
                <a href="/language-schools">
                  <Languages className="w-5 h-5 mr-2" />
                  Dil Kursları
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-gray-700"
                asChild
              >
                <a href="#genel-yorumlar">
                  Soru Sor
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200 max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Yüzlerce öğrenci kullandı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Güncel 2025 bilgileri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Scam Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Neden Danışmanlık Kullanma?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Binlerce lira ödemenize gerek yok. İşte gerçekler:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Gereksiz Ücretler</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Danışmanlık firmaları 20.000–50.000 TL arasında ücret talep ediyor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Senin Yerine Hiçbir Şey Yapamazlar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evrakları ve belgeleri yine sen oluşturuyorsun. Onlar sadece yönlendiriyor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Tüm İşlemler Ücretsiz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sadece başvuru ücreti, noter onaylı tercüme bedeli gibi ücretleri ödersin.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section id="steps" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Başvuru İçin Gerekli Temel Adımlar</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Her adımı sırayla takip ederek başvurunuzu kendiniz yapabilirsiniz
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">ÖSYM'den Belgeleri Alma</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-blue-900">📝 Adım 1.1: Dilekçe İndir ve Doldur</h4>
                      <p className="text-sm text-blue-800">
                        <a
                          href="https://dokuman.osym.gov.tr/pdfdokuman/2019/GENEL/genelamaclidilekce03012019.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium hover:text-blue-600"
                        >
                          ÖSYM Genel Amaçlı Dilekçe Formu
                        </a>
                        'nu indir ve yazdır.
                      </p>
                      
                      <div className="bg-white rounded p-3 space-y-3 text-sm">
                        <p className="font-medium text-gray-900">Doldurulacak Alanlar:</p>
                        
                        <div className="bg-amber-50 border border-amber-200 rounded p-3 space-y-2">
                          <p className="font-semibold text-amber-900 text-xs">⚠️ Önemli: Evrak Referans Numarası</p>
                          <p className="text-xs text-amber-800">
                            <strong>Evrak Referans Numarası</strong> ÖSYM Aday İşlemleri Sistemi'nden alınacak.
                          </p>
                        </div>
                        
                        <ul className="space-y-1 text-gray-700 text-xs">
                          <li>• <strong>Evrak Referans No:</strong> ÖSYM Aday İşlemleri Sistemi'nden alınacak</li>
                          <li>• <strong>T.C. Kimlik No:</strong> [TC KİMLİK NUMARANIZ]</li>
                          <li>• <strong>Ad Soyad:</strong> [ADINIZ SOYADINIZ]</li>
                          <li>• <strong>E-posta:</strong> [E-POSTA ADRESİNİZ]</li>
                          <li>• <strong>Telefon No:</strong> [TELEFON NUMARANIZ]</li>
                          <li>• <strong>Doğum Tarihi:</strong> [GG/AA/YYYY]</li>
                          <li>• <strong>Doğum Yeri:</strong> [DOĞUM YERİNİZ]</li>
                          <li>• <strong>Yazışma Adresi:</strong> ÖSYM tarafından belgelerin gönderilmesini istediğiniz tam adres</li>
                          <li>• <strong>Sınav Dönemi:</strong> [SINAVA GİRDİĞİN YIL]-YKS (örn: 2025-YKS)</li>
                          <li>• <strong>SINAV ADI / YILI:</strong> Yükseköğretim Kurumları Sınavı / [SINAVA GİRDİĞİN YIL]</li>
                        </ul>
                        
                        <div className="bg-red-50 border border-red-200 rounded p-3 mt-2">
                          <p className="text-xs text-red-800 font-medium">
                            ⚠️ Tüm bilgiler eksiksiz ve doğru olmalıdır! Eksik veya hatalı bilgi başvurunuzun reddine neden olabilir.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded p-3 text-sm">
                        <p className="font-medium text-gray-900 mb-2">Talepler Kısmına Yazılacak Metin:</p>
                        <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-xs leading-relaxed">
                          <p>[SINAVA GİRDİĞİN YIL] Yükseköğretim Kurumları Sınavı (YKS) kapsamında tarafıma düzenlenen:</p>
                          <br />
                          <p>• [SINAVA GİRDİĞİN YIL] YKS Sonuç Belgesi ([TARİH] tarihli)</p>
                          <p>• [SINAVA GİRDİĞİN YIL] YKS Yerleştirme Sonuç Belgesi ([TARİH] tarihli)</p>
                          <br />
                          <p>evraklarının ıslak imzalı olarak beşer (5) nüsha halinde tarafıma gönderilmesini arz ederim.</p>
                          <br />
                          <p>Gereğini bilgilerinize saygılarımla arz ederim.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-amber-900">📦 Adım 1.2: PTT ile Gönder</h4>
                      <div className="text-sm text-amber-800 space-y-2">
                        <p className="font-medium">Gönderim Adresi:</p>
                        <div className="bg-white rounded p-3 border border-amber-200">
                          <p className="font-mono text-xs leading-relaxed">
                            Öğrenci Seçme ve Yerleştirme Merkezi (ÖSYM) Başkanlığı<br />
                            Üniversiteler Mahallesi<br />
                            İhsan Doğramacı Bulvarı No:4D<br />
                            06800 Bilkent Çankaya / ANKARA
                          </p>
                        </div>
                        <p className="text-xs mt-2">
                          <strong>Not:</strong> Kamu kurumları sadece PTT tarafından teslim edilen belgeleri kabul edebiliyor. İsterseniz PTT-Acil Posta Servisi ile de gönderebilirsiniz. Dilekçeniz hızlı bir şekilde ulaşır. Devlet üniversitesinde okuyorsanız ve üniversitenizin içerisinde bir PTT şubesi mevcut ise üniversitenizin anlaşması olabilir, mektubunuz ücret farkı olmadan APS ile gönderilebilir. Araştırın.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-green-900">✅ Adım 1.3: Belgeleri Bekle</h4>
                      <p className="text-sm text-green-800">
                        ÖSYM, <strong>1-2 hafta içerisinde</strong> Daire Başkanı tarafından imzalanmış ve ÖSYM mührü ile mühürlenmiş belgelerinizi adresinize gönderecek.
                      </p>
                      <p className="text-xs text-green-700 mt-2">
                        📋 Gelen belgeler: YKS Sonuç Belgesi ve Yerleştirme Sonuç Belgesi (her birinden 5 nüsha)
                      </p>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Lise Diplomasını İmzalatma</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-purple-900">🏫 Adım 2.1: İlçe Milli Eğitim Müdürlüğüne Git</h4>
                      <p className="text-sm text-purple-800">
                        Mezun olduğunuz <strong>lisenin bağlı olduğu İlçe Milli Eğitim Müdürlüğü</strong>'ne gitmeniz gerekiyor.
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-purple-900">✍️ Adım 2.2: Şube Müdürüne İmzalatma</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p>Lise diplomanızı <strong>İlçe Milli Eğitim Şube Müdürü</strong>'ne imzalatın.</p>
                        <div className="bg-white rounded p-3 border border-purple-200">
                          <p className="font-medium text-gray-900 mb-1">Yapılacaklar:</p>
                          <ul className="space-y-1 text-gray-700 text-xs">
                            <li>• Şube müdürü tarafından diploma imzalanacak</li>
                            <li>• <strong>İlçe Milli Eğitim mührü</strong> vurulacak</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 rounded p-3 border border-blue-200 mt-3">
                          <p className="font-medium text-blue-900 mb-2 text-xs">💬 Neden yaptırmak istediğinizi sorarlarsa:</p>
                          <p className="text-xs text-blue-800 italic">
                            "Almanya'da üniversite başvurusu yapacağım. Apostil yaptırmam gerekiyor. Okul müdürümün imzası apostil sisteminde yokmuş."
                          </p>
                        </div>
                        
                        <p className="text-xs text-purple-700 mt-2">
                          ⚠️ <strong>Önemli:</strong> Bu onay, diplomanızın yurt dışında geçerli olması için zorunludur.
                        </p>
                      </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-indigo-900">📋 Adım 2.3: Apostil Yaptırma (İsteğe Bağlı)</h4>
                      <div className="text-sm text-indigo-800 space-y-2">
                        <p>
                          Bazı ilçelerde İlçe MEM, Kaymakamlık binasında bulunuyor. Eğer öyle ise <strong>Kaymakamlık Yazı İşleri Bölümü</strong>'nden diplomanıza apostil de yaptırabilirsiniz. Beşinci bölümde diplomanızıda apostil yaptırmanız gerektiğini belirttik.
                        </p>
                        <div className="bg-white rounded p-3 border border-indigo-200">
                          <p className="text-xs text-gray-700">
                            Apostil, belgenizin uluslararası geçerliliğini artıran ek bir onaylama işlemidir. Bazı durumlarda gerekli olabilir.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Belgeleri Almanca Yeminli Tercümana Çevirtme</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-orange-900">📄 Adım 3.1: Çevrilecek Belgeler</h4>
                      <div className="text-sm text-orange-800 space-y-2">
                        <p className="font-medium">Aşağıdaki belgeleri Almanca yeminli tercümana çevirtmeniz gerekiyor:</p>
                        <div className="bg-white rounded p-3 border border-orange-200">
                          <ul className="space-y-1 text-gray-700 text-xs">
                            <li>• <strong>ÖSYM YKS Yerleştirme Belgesi</strong></li>
                            <li>• <strong>ÖSYM YKS Sınav Sonuç Belgesi</strong></li>
                            <li>• <strong>Lise Diploması</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-yellow-900">⚠️ Adım 3.2: Tercüman Seçimi</h4>
                      <div className="text-sm text-yellow-800 space-y-2">
                        <p>
                          <strong>Önemli:</strong> Tercümanın <strong>noter onaylı tercüme</strong> verebildiğinden emin olun!
                        </p>
                        <div className="bg-white rounded p-3 border border-yellow-200">
                          <p className="text-xs text-gray-700">
                            Tüm tercümanlar noter onaylı tercüme yapamaz. Tercümanla görüşürken mutlaka "Noter onaylı tercüme yapabiliyor musunuz?" diye sorun.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-green-900">✅ Adım 3.3: Belgeleri Teslim Al ve Noter Onayı</h4>
                      <div className="text-sm text-green-800 space-y-2">
                        <p>Tercüme edilen belgeler tercümandan teslim alındıktan sonra:</p>
                        <div className="bg-white rounded p-3 border border-green-200 space-y-2">
                          <p className="text-xs text-gray-900 font-medium">1. Tercümanın Hangi Notere Gittiğini Öğrenin</p>
                          <p className="text-xs text-gray-700">
                            Tercüman size hangi notere gitmeniz gerektiğini söyleyecektir (kendi imzasının kayıtlı olduğu noter).
                          </p>
                          
                          <p className="text-xs text-gray-900 font-medium mt-3">2. Notere Gidip Onaylattırın</p>
                          <p className="text-xs text-gray-700">
                            Tercümanın belirttiği notere gidip çevirileri onaylatın. Noter, tercümanın imzasını teyit edip belgeyi onaylayacaktır.
                          </p>
                        </div>
                        <p className="text-xs text-green-700 mt-2">
                          💡 <strong>Not:</strong> Noter onayı olmayan çevirilere apostil yaptıramazsınız. Apostil yaptırmadığınız belgeler kabul edilmeyebilir.
                        </p>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 hover:border-primary transition-colors border-dashed">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Üniversite Öğrenci Belgesi (Opsiyonel - Aktif Öğrenciler İçin)
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-blue-900">ℹ️ Bu Adım Kimin İçin?</h4>
                      <p className="text-sm text-blue-800">
                        <strong>Sadece aktif üniversite öğrencileri için!</strong> Bazı Alman üniversiteleri başvuruda aktif öğrenciniz olup olmadığını sorabiliyor.
                      </p>
                    </div>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-cyan-900">📋 Adım 4.1: Üniversite Öğrenci İşlerinden İngilizce Öğrenci Belgesi Alma</h4>
                      <div className="text-sm text-cyan-800 space-y-2">
                        <p>Kayıtlı olduğunuz üniversitenin <strong>Öğrenci İşleri</strong> birimine gidip <strong>İngilizce Öğrenci Belgesi</strong> talep edin.</p>
                        
                        <div className="bg-white rounded p-3 border border-cyan-200">
                          <p className="font-medium text-gray-900 mb-2 text-xs">Belge Özellikleri:</p>
                          <ul className="space-y-1 text-gray-700 text-xs">
                            <li>• <strong>Öğrenci İşleri Şube Müdürü</strong> tarafından imzalanmalı</li>
                            <li>• <strong>Rektörlük mührü</strong> vurulmalı</li>
                            <li>• Belge <strong>İngilizce</strong> olmalı</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-amber-900">⚠️ Adım 4.2: Önemli Uyarı</h4>
                      <div className="text-sm text-amber-800 space-y-2">
                        <p>
                          Öğrenci İşleri görevlisine <strong>"Bu belgeye apostil yaptıracağım"</strong> dediğinizden emin olun!
                        </p>
                        <div className="bg-white rounded p-3 border border-amber-200">
                          <p className="text-xs text-gray-700">
                            Bu bilgiyi vermek önemlidir çünkü apostil için uygun formatta ve doğru yetkililerce imzalanmış belge gerekir.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Belgeleri Apostil Yaptırma</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-teal-900">🏢 Adım 5.1: Apostil Yaptırma Seçenekleri</h4>
                      <div className="text-sm text-teal-800 space-y-3">
                        <p className="font-medium">Apostil işlemi için iki seçeneğiniz var:</p>
                        
                        <div className="bg-white rounded p-3 border border-teal-200 space-y-2">
                          <p className="font-semibold text-teal-900">Seçenek 1: Valilik veya Kaymakamlık (Ücretsiz)</p>
                          <p className="text-xs text-gray-700">
                            Size en yakın <strong>Valilik</strong> veya <strong>Kaymakamlık Yazı İşleri Bölümü</strong>'ne gidin. 
                            Apostil işlemi ücretsizdir.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded p-3 border border-teal-200 space-y-2">
                          <p className="font-semibold text-teal-900">Seçenek 2: Almanya Başkonsolosluğu (Tasdik İşlemi - 60 EUR)</p>
                          <p className="text-xs text-gray-700">
                            Alternatif olarak <strong>Almanya Başkonsolosluğu</strong>'ndan tasdik işlemi yaptırabilirsiniz. 
                            2025 itibarıyla ücreti <strong>60 EUR</strong>.
                          </p>
                          <a 
                            href="https://tuerkei.diplo.de/tr-tr/service/1514568-1514568"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal-600 underline hover:text-teal-700 inline-block mt-1"
                          >
                            📄 Detaylı bilgi için tıklayın
                          </a>
                        </div>
                        
                        <p className="text-xs text-teal-700 mt-2">
                          💡 <strong>Öneri:</strong> Valilik/Kaymakamlık ücretsiz olduğu için genellikle tercih edilir.
                        </p>
                      </div>
                    </div>

                    <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-violet-900">📑 Adım 5.2: Apostil Yaptırılacak Belgeler</h4>
                      <div className="text-sm text-violet-800 space-y-2">
                        <p className="font-medium">Aşağıdaki belgelerin tamamına apostil yaptırmanız gerekiyor:</p>
                        <div className="bg-white rounded p-4 border border-violet-200">
                          <ul className="space-y-2 text-gray-700 text-xs">
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">1.</span>
                              <span><strong>Lise Diploması</strong> (Orijinal - İlçe MEM imzalı)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">2.</span>
                              <span><strong>Lise Diploması Noter Onaylı Tercümesi</strong> (Almanca)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">3.</span>
                              <span><strong>ÖSYM YKS Sonuç Belgesi</strong> (Orijinal)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">4.</span>
                              <span><strong>ÖSYM YKS Sonuç Belgesi Noter Onaylı Tercümesi</strong> (Almanca)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">5.</span>
                              <span><strong>ÖSYM YKS Yerleştirme Belgesi</strong> (Orijinal)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">6.</span>
                              <span><strong>ÖSYM YKS Yerleştirme Belgesi Noter Onaylı Tercümesi</strong> (Almanca)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-violet-600 font-bold">7.</span>
                              <span><strong>İngilizce Üniversite Öğrenci Belgesi</strong> (Eğer varsa)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-green-900">✅ Adım 5.3: Apostil İşlemi Tamamlandı</h4>
                      <div className="text-sm text-green-800 space-y-2">
                        <p>
                          Yazı İşleri bölümü tüm belgelerinize apostil belgesi düzenleyecek. Artık belgeleriniz uluslararası geçerliliğe sahip!
                        </p>
                        <p className="text-xs text-green-700 mt-2">
                          💡 <strong>Not:</strong> Apostil belgesi olmadan belgeleriniz Almanya'da geçersiz sayılabilir.
                        </p>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Belgeleri Uni-Assist'e Yükleme</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-sky-900">🖨️ Adım 6.1: Belgeleri Taratma</h4>
                      <div className="text-sm text-sky-800 space-y-2">
                        <p>
                          Apostilli belgelerinizi <strong>taratma özelliği bulunan bir yazıcı</strong> ile taratın.
                        </p>
                        <div className="bg-white rounded p-3 border border-sky-200">
                          <p className="text-xs text-gray-700">
                            💡 <strong>İpucu:</strong> Belge ve apostili 2 sayfa olarak ayrı ayrı taratılabilir. Her iki sayfayı da tek bir PDF dosyasında birleştirin.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-indigo-900">📝 Adım 6.2: Dosyaları İngilizce İsimlendirme</h4>
                      <div className="text-sm text-indigo-800 space-y-2">
                        <p className="font-medium">Belgeleri Uni-Assist'e yüklerken mutlaka İngilizce isimler kullanın:</p>
                        <div className="bg-white rounded p-3 border border-indigo-200 space-y-2">
                          <div className="text-xs space-y-2">
                            <div className="border-b border-indigo-100 pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                HIGH SCHOOL DIPLOMA (ORIGINAL TURKISH) APOSTILLED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ Lise Diploması (Orijinal Türkçe) + Apostil</p>
                            </div>
                            
                            <div className="border-b border-indigo-100 pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                HIGH SCHOOL DIPLOMA (GERMAN) APOSTILLED NOTARIZED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ Lise Diploması Noter Onaylı Tercüme + Apostil</p>
                            </div>
                            
                            <div className="border-b border-indigo-100 pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                YKS-OSYM UNIVERSITY ENTRANCE EXAM RESULTS (ORIGINAL TURKISH) APOSTILLED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ ÖSYM YKS Sınav Sonuç Belgesi (Orijinal) + Apostil</p>
                            </div>
                            
                            <div className="border-b border-indigo-100 pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                YKS-OSYM UNIVERSITY ENTRANCE EXAM RESULTS (GERMAN) APOSTILLED NOTARIZED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ ÖSYM YKS Sınav Sonuç Belgesi Noter Onaylı Tercüme + Apostil</p>
                            </div>
                            
                            <div className="border-b border-indigo-100 pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                YKS-OSYM UNIVERSITY ENTRANCE PLACEMENT RESULTS (ORIGINAL TURKISH) APOSTILLED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ ÖSYM YKS Yerleştirme Belgesi (Orijinal) + Apostil</p>
                            </div>
                            
                            <div className="pb-2">
                              <p className="font-mono text-gray-800 break-all">
                                YKS-OSYM UNIVERSITY ENTRANCE PLACEMENT RESULTS (GERMAN) APOSTILLED NOTARIZED.pdf
                              </p>
                              <p className="text-gray-500 text-[10px] mt-1">→ ÖSYM YKS Yerleştirme Belgesi Noter Onaylı Tercüme + Apostil</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-blue-900">🌐 Adım 6.3: Uni-Assist'e Yükleme</h4>
                      <div className="text-sm text-blue-800 space-y-2">
                        <p>
                          <a
                            href="https://www.uni-assist.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium hover:text-blue-700"
                          >
                            uni-assist.de
                          </a>{" "}
                          hesabınıza giriş yapın ve belgeleri yükleyin.
                        </p>
                        <div className="bg-white rounded p-3 border border-blue-200">
                          <p className="text-xs text-gray-700 mb-2"><strong>Ücretler:</strong></p>
                          <ul className="text-xs text-gray-700 space-y-1">
                            <li>• İlk üniversite: ~75 EUR</li>
                            <li>• Sonraki her üniversite: ~30 EUR</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-purple-900">📄 Adım 6.4: Ek Belgeler</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p className="font-medium">Uni-Assist'e ayrıca şu belgeleri de yüklemeniz gerekiyor:</p>
                        <div className="bg-white rounded p-3 border border-purple-200 space-y-2">
                          <div className="text-xs space-y-2">
                            <div className="border-b border-purple-100 pb-2">
                              <p className="font-semibold text-gray-900">✅ Zorunlu:</p>
                              <p className="text-gray-700 mt-1">• <strong>Pasaport</strong> (Geçerli pasaport fotokopisi)</p>
                            </div>
                            
                            <div>
                              <p className="font-semibold text-gray-900">📋 İsteğe Bağlı (Okulun isteyip istemediğine göre):</p>
                              <ul className="text-gray-700 mt-1 space-y-1">
                                <li>• <strong>Almanca CV (Özgeçmiş)</strong> - Lebenslauf formatında</li>
                                <li>• <strong>Almanca Motivasyon Mektubu</strong> - Bewerbungsschreiben / Motivationsschreiben</li>
                              </ul>
                              <p className="text-[10px] text-purple-700 mt-2">
                                💡 Başvurduğunuz üniversitenin websitesinden hangi belgelerin gerekli olduğunu kontrol edin.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 7 - University Selection */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    7
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Üniversite ve Bölüm Seçimi</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Doğru üniversite ve bölüm seçimi başarınızı etkiler. NC türleri ve bölüm uyumluluğuna dikkat edin.
                  </p>

            {/* NC Types */}
            <Card className="border-2">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4">📊 NC (Numerus Clausus) Nedir?</h3>
                <p className="text-muted-foreground mb-4">
                  NC, kontenjan kaynaklı kabul kısıtlamasıdır. Bavyera Formülü ise Türk notlarını Alman sistemine dönüştüren araçtır.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-2">NC-frei</h4>
                    <p className="text-sm text-green-800">
                      <strong>Not sınırlaması yok!</strong> YKS'de aldığınız puanın önemi yoktur. Sadece lise diploması yeterlidir.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-900 mb-2">Örtlich NC</h4>
                    <p className="text-sm text-orange-800">
                      <strong>Kontenjan sınırlaması var.</strong> Bölüme NC (not ortalaması) sınırlaması uygulanıyor. YKS puanınız önemli!
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">NC unbekannt</h4>
                    <p className="text-sm text-gray-800">
                      <strong>Bilinmiyor.</strong> Üniversite henüz NC politikasını açıklamadı. Başvuru sonrası netleşecek.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NC Calculator */}
            <Card className="border-2 border-blue-300 bg-blue-50">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">🧮 NC Hesaplama Aracı</h3>
                <p className="text-sm text-blue-800 mb-6">
                  YKS puanınızı girerek Alman not sistemindeki (1.0 - 4.0) karşılığını hesaplayın. 
                  <strong> Not: 1.0 en iyi, 4.0 en düşük notu temsil eder.</strong>
                </p>
                
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      YKS Yerleştirme Puanınız (180 - 560 arası)
                    </label>
                    <input
                      type="number"
                      id="yks-score"
                      min="180"
                      max="560"
                      placeholder="Örn: 450"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                    />
                  </div>
                  
                  <button
                    onClick={() => {
                      const input = document.getElementById('yks-score') as HTMLInputElement;
                      const resultDiv = document.getElementById('nc-result');
                      const score = parseFloat(input.value);
                      
                      if (!score || score < 180 || score > 560) {
                        if (resultDiv) resultDiv.innerHTML = '<p class="text-red-600 font-medium">❌ Lütfen 180-560 arası geçerli bir puan girin!</p>';
                        return;
                      }
                      
                      // NC Hesaplama: 560 puan = 1.0, 180 puan = 4.0
                      // Formül: NC = 4.0 - ((puan - 180) / (560 - 180)) * 3.0
                      const nc = 4.0 - ((score - 180) / (560 - 180)) * 3.0;
                      const ncRounded = nc.toFixed(2);
                      
                      let evaluation = '';
                      let color = '';
                      
                      if (nc <= 1.5) {
                        evaluation = 'Mükemmel! Çoğu NC\'li programa başvurabilirsiniz.';
                        color = 'text-green-600';
                      } else if (nc <= 2.5) {
                        evaluation = 'İyi! Orta seviye NC\'li programlara şansınız yüksek.';
                        color = 'text-blue-600';
                      } else if (nc <= 3.5) {
                        evaluation = 'Orta. NC-frei programları tercih edin.';
                        color = 'text-orange-600';
                      } else {
                        evaluation = 'Düşük. NC-frei programlara odaklanın.';
                        color = 'text-red-600';
                      }
                      
                      if (resultDiv) {
                        resultDiv.innerHTML = `
                          <div class="space-y-3">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                              <span class="text-gray-700 font-medium">YKS Puanınız:</span>
                              <span class="text-2xl font-bold text-gray-900">${score}</span>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-blue-100 rounded-lg">
                              <span class="text-blue-900 font-medium">Alman NC Notunuz:</span>
                              <span class="text-3xl font-bold text-blue-900">${ncRounded}</span>
                            </div>
                            <p class="${color} font-medium text-center">${evaluation}</p>
                          </div>
                        `;
                      }
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    NC Hesapla
                  </button>
                  
                  <div id="nc-result" className="mt-4"></div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-600 mb-2"><strong>Alman Not Sistemi:</strong></p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>• 1.0 - 1.5: Sehr gut (Çok İyi)</div>
                      <div>• 1.6 - 2.5: Gut (İyi)</div>
                      <div>• 2.6 - 3.5: Befriedigend (Orta)</div>
                      <div>• 3.6 - 4.0: Ausreichend (Yeterli)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Minimum Score Requirement */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-red-900">⚠️ Önemli: Minimum Puan Şartı</h3>
                <p className="text-sm text-red-800">
                  AYT ve TYT'de aldığınız <strong>yerleştirme puanının 180'den yüksek</strong> olması gerekiyor!
                </p>
              </CardContent>
            </Card>

            {/* Department Compatibility */}
            <Card className="border-2">
              <CardContent className="pt-8 pb-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">🎓 Bölüm Uyumluluğu</h3>
                  <p className="text-muted-foreground mb-6">
                    Türkiye'de kazandığınız bölüm ile Almanya'da başvurduğunuz bölüm <strong>birbirine yakın ve ilişkili</strong> olmalıdır.
                  </p>
                </div>

                {/* Engineering Students */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">⚙️ Mühendislik Öğrencileri</h4>
                  <p className="text-sm text-blue-800">
                    Mühendislik bölümü kazanan öğrenciler <strong>tüm mühendislik bölümlerine</strong> başvurabilir.
                  </p>
                </div>

                {/* Chemistry Students */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 space-y-3">
                  <h4 className="font-bold text-purple-900 text-lg">🧪 Kimya Bölümü Kazananlar</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded border border-purple-100">
                      <p className="font-semibold text-purple-900 mb-2">Türkçe</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Kimya Mühendisliği</li>
                        <li>• Biyokimya</li>
                        <li>• Gıda Kimyası</li>
                        <li>• Eczacılık Kimyası</li>
                        <li>• Ekosistem Bilimleri</li>
                        <li>• Ekoloji</li>
                        <li>• Sürdürülebilir Kimya</li>
                        <li>• Nanoteknoloji</li>
                        <li>• Malzeme Bilimi</li>
                        <li>• Plastik Mühendisliği</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-purple-100">
                      <p className="font-semibold text-purple-900 mb-2">Almanca (Studiengang)</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Chemieingenieurwesen</li>
                        <li>• Biochemie</li>
                        <li>• Lebensmittelchemie</li>
                        <li>• Pharmazeutische Chemie</li>
                        <li>• Ökosystemwissenschaften</li>
                        <li>• Ökologie</li>
                        <li>• Nachhaltige Chemie</li>
                        <li>• Nanotechnologie</li>
                        <li>• Materialwissenschaft</li>
                        <li>• Kunststofftechnik</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Biology Students */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-5 space-y-3">
                  <h4 className="font-bold text-green-900 text-lg">🧬 Biyoloji Bölümü Kazananlar</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded border border-green-100">
                      <p className="font-semibold text-green-900 mb-2">Türkçe</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Biyoloji Mühendisliği</li>
                        <li>• Biyokimya</li>
                        <li>• Moleküler Biyoloji</li>
                        <li>• Biyoteknoloji</li>
                        <li>• Biyofizik</li>
                        <li>• Beslenme Bilimi</li>
                        <li>• Medikal Enformatik</li>
                        <li>• Biyo Malzeme</li>
                        <li>• Genetik</li>
                        <li>• Gıda Mühendisliği</li>
                        <li>• Gıda Teknolojisi</li>
                        <li>• Biyomedikal</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-100">
                      <p className="font-semibold text-green-900 mb-2">Almanca (Studiengang)</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Bioingenieurwesen</li>
                        <li>• Biochemie</li>
                        <li>• Molekularbiologie</li>
                        <li>• Biotechnologie</li>
                        <li>• Biophysik</li>
                        <li>• Ernährungswissenschaft</li>
                        <li>• Medizinische Informatik</li>
                        <li>• Biomaterialien</li>
                        <li>• Genetik</li>
                        <li>• Lebensmitteltechnologie</li>
                        <li>• Lebensmitteltechnik</li>
                        <li>• Biomedizintechnik</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mathematics Students */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 space-y-3">
                  <h4 className="font-bold text-indigo-900 text-lg">📐 Matematik Bölümü Kazananlar</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded border border-indigo-100">
                      <p className="font-semibold text-indigo-900 mb-2">Türkçe</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Bilgisayar Mühendisliği</li>
                        <li>• Informatik</li>
                        <li>• Yazılım Mühendisliği</li>
                        <li>• Bilişim Sistemleri</li>
                        <li>• Yapay Zeka</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-indigo-100">
                      <p className="font-semibold text-indigo-900 mb-2">Almanca (Studiengang)</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Informatik</li>
                        <li>• Computertechnik</li>
                        <li>• Software Engineering</li>
                        <li>• Informationssysteme</li>
                        <li>• Künstliche Intelligenz</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Physics Students */}
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 space-y-3">
                  <h4 className="font-bold text-cyan-900 text-lg">⚛️ Fizik Bölümü Kazananlar</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded border border-cyan-100">
                      <p className="font-semibold text-cyan-900 mb-2">Türkçe</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Makine Mühendisliği</li>
                        <li>• Elektrik Mühendisliği</li>
                        <li>• Elektronik Mühendisliği</li>
                        <li>• Enerji Mühendisliği</li>
                        <li>• Mekatronik Mühendisliği</li>
                        <li>• Malzeme Mühendisliği</li>
                        <li>• Otomotiv Mühendisliği</li>
                        <li>• Uzay Mühendisliği</li>
                        <li>• Jeoloji Mühendisliği</li>
                        <li>• Petrol Mühendisliği</li>
                        <li>• Çevre Mühendisliği</li>
                        <li>• İnşaat Mühendisliği</li>
                        <li>• Maden Mühendisliği</li>
                        <li>• Harita Mühendisliği</li>
                        <li>• Gemi İnşa Mühendisliği</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-cyan-100">
                      <p className="font-semibold text-cyan-900 mb-2">Almanca (Studiengang)</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Maschinenbau</li>
                        <li>• Elektrotechnik</li>
                        <li>• Elektronik</li>
                        <li>• Energietechnik</li>
                        <li>• Mechatronik</li>
                        <li>• Materialwissenschaft</li>
                        <li>• Fahrzeugtechnik</li>
                        <li>• Luft- und Raumfahrttechnik</li>
                        <li>• Geologie</li>
                        <li>• Erdöltechnik</li>
                        <li>• Umwelttechnik</li>
                        <li>• Bauingenieurwesen</li>
                        <li>• Bergbau</li>
                        <li>• Vermessungstechnik</li>
                        <li>• Schiffbau</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* German Language Requirements */}
            <Card className="border-2 border-yellow-300 bg-yellow-50">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-900">🗣️ Almanca Dil Yeterliliği</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-900 mb-2">Genel Kural: C1 Seviyesi</h4>
                    <p className="text-sm text-yellow-800">
                      Almanya'da lisans programları için genellikle <strong>C1 seviyesi Almanca</strong> gereklidir. 
                      Ancak bazı üniversiteler <strong>B2 seviyesi ile başlamaya</strong> izin verebiliyor.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-5">
                    <h4 className="font-bold text-green-900 mb-3 text-lg">✅ Almanca Dil Yeterliliği Olmadan Başvurulabilecek Üniversiteler</h4>
                    <p className="text-sm text-green-800 mb-4">
                      Aşağıdaki üniversiteler Almanca dil belgesi olmadan başvuru kabul ediyor:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="bg-white p-3 rounded border border-green-200">
                        <strong className="text-green-900">Universität Duisburg-Essen</strong>
                        <p className="text-xs text-gray-600 mt-1">⚠️ Kendi dil okulu yok. Okul sadece vizeye sponsor olur. Kabul sonrası yoğun Almanca programına kayıt gerekli.</p>
                      </li>
                      <li className="bg-white p-3 rounded border border-green-200">
                        <strong className="text-green-900">Universität Bremen</strong>
                      </li>
                      <li className="bg-white p-3 rounded border border-green-200">
                        <strong className="text-green-900">TU Dortmund</strong>
                        <p className="text-xs text-gray-600 mt-1">⚠️ Kendi dil okulu yok. Okul sadece vizeye sponsor olur. Kabul sonrası yoğun Almanca programına kayıt gerekli.</p>
                      </li>
                      <li className="bg-white p-3 rounded border border-green-200">
                        <strong className="text-green-900">TU Clausthal</strong>
                      </li>
                      <li className="bg-white p-3 rounded border border-green-200">
                        <strong className="text-green-900">Universität des Saarlandes (Saarland)</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-2">📝 Önemli Notlar</h4>
                    <ul className="text-xs text-blue-800 space-y-2">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>
                          <strong>TU Dortmund ve Duisburg-Essen:</strong> Bu üniversiteler kendi bünyelerinde dil okulu sunmadıkları için, 
                          kabul aldıktan sonra yoğun Almanca dil programı veren bir dil kursuna kayıt olmanız gerekir. 
                          Sonrasında vize başvurusu yapabilirsiniz.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Her üniversitenin dil politikası farklıdır. Başvuru yapmadan önce üniversitenin websitesinden güncel bilgileri kontrol edin.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>B2 ile başlayabileceğiniz programlarda, genellikle belirli bir süre içinde C1 seviyesine ulaşmanız beklenir.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
                </div>
              </CardContent>
            </Card>

            {/* Step 8 - Visa Process */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl">
                    8
                  </div>
                  <div className="flex items-center gap-3">
                    <Plane className="w-6 h-6 shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-semibold">Vize Süreci</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Almanya öğrenci vizesi için gerekli belgeler ve finansal kanıtlama süreçleri
                  </p>

            {/* Language Certificate Requirement */}
            <Card className="border-2 border-pink-300 bg-pink-50">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-pink-900">📜 Dil Sertifikası Zorunluluğu</h3>
                <div className="bg-white border border-pink-200 rounded-lg p-5 space-y-3">
                  <p className="text-sm text-pink-800">
                    Almanya Konsolosluğu, dil okuluna gelecek öğrencilerin <strong>sıfırdan başlayacak olsalar bile en az A1 seviyesi Almanca sertifikası</strong> göstermelerini istiyor.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-300 rounded p-3 mb-4">
                    <p className="text-xs text-amber-800 font-medium">
                      ⚠️ <strong>Minimum Seviye:</strong> A1 (Başlangıç seviyesi) - Ancak daha yüksek seviye sertifikalar (A2, B1, B2, C1, C2) da kabul edilir ve daha avantajlıdır.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <h4 className="font-bold text-pink-900 mb-2">TELC (Tüm Seviyeler)</h4>
                      <p className="text-xs text-pink-800 mb-2">
                        <strong>Seviyeler:</strong> A1, A2, B1, B2, C1, C2
                      </p>
                      <p className="text-xs text-pink-800">
                        <strong>Ortalama açıklanma süresi:</strong> 3-6 hafta
                      </p>
                    </div>
                    
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <h4 className="font-bold text-pink-900 mb-2">Goethe Institut (Tüm Seviyeler)</h4>
                      <p className="text-xs text-pink-800 mb-2">
                        <strong>Seviyeler:</strong> A1, A2, B1, B2, C1, C2
                      </p>
                      <p className="text-xs text-pink-800">
                        <strong>Ortalama açıklanma süresi:</strong> 10 gün (daha hızlı!)
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                    <p className="text-xs text-blue-800">
                      <strong>💡 Not:</strong> Vize için minimum A1 yeterli olsa da, eğer daha yüksek seviye bir sertifikanız varsa (B1, B2, C1, C2), bunları kullanmanız başvurunuzu güçlendirir.
                    </p>
                  </div>
                  
                  <p className="text-xs text-pink-700 mt-3">
                    💡 Vize başvurusundan önce sınava girip sertifikanızı aldığınızdan emin olun.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Financial Proof */}
            <Card className="border-2">
              <CardContent className="pt-8 pb-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-4">💰 Finansal Kanıtlama</h3>
                <p className="text-muted-foreground mb-4">
                  Almanya'da yaşam masraflarınızı karşılayabileceğinizi kanıtlamanız gerekiyor. İki seçeneğiniz var:
                </p>

                {/* Option 1: Blocked Account */}
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-5 space-y-3">
                  <h4 className="font-bold text-blue-900 text-lg">📊 Seçenek 1: Kilitli Hesap (Sperrkonto)</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-blue-800">
                      Almanya devletinin onayladığı bankalara <strong>11.904 EUR</strong> yatırmanız gerekiyor.
                    </p>
                    
                    <div className="bg-white border border-blue-200 rounded p-4">
                      <p className="text-xs text-gray-900 font-medium mb-2">Nasıl Çalışır?</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Banka parayı 12 aya böler</li>
                        <li>• Her ay size belirli bir miktar geri öder</li>
                        <li>• Bu, aylık yaşam masraflarınızı karşılar</li>
                      </ul>
                    </div>
                    
                    <p className="text-xs text-blue-700">
                      💡 Onaylı bankalar: Fintiba, Deutsche Bank, Expatrio vb.
                    </p>
                  </div>
                </div>

                {/* Option 2: Verpflichtungserklärung */}
                <div className="bg-green-50 border border-green-300 rounded-lg p-5 space-y-4">
                  <h4 className="font-bold text-green-900 text-lg">📋 Seçenek 2: Verpflichtungserklärung (VE) - Resmi Taahhütname</h4>
                  
                  <div className="bg-white border border-green-200 rounded p-4 space-y-3">
                    <p className="text-sm text-green-800">
                      Bir Alman vatandaşı veya Almanya'da oturum izni olan biri, yabancılar dairesinden <strong>Verpflichtungserklärung</strong> çıkarır.
                    </p>
                    <p className="text-xs text-gray-700 italic">
                      Bu, "Ben bu öğrencinin Almanya'daki tüm masraflarını karşılamayı kabul ediyorum" anlamına gelen yasal bir sponsorluk belgesidir.
                    </p>
                  </div>

                  {/* Sponsor Requirements */}
                  <div className="bg-white border border-green-200 rounded p-4">
                    <p className="text-sm font-semibold text-green-900 mb-3">✔ Sponsor Koşulları</p>
                    <ul className="text-xs text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Almanya'da ikamet etmeli</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Düzenli geliri olmalı (2025 yılı itibariyle minimum gereksinimler aşağıdaki tabloda)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Kira ve diğer giderleri sonrası yeterli "disposable income" kalmalı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Mali durumu temiz olmalı (borçsuz)</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4 bg-green-50 border border-green-300 rounded p-3">
                      <p className="text-xs font-semibold text-green-900 mb-2">💰 2025 Yılı Minimum Net Gelir Gereksinimleri</p>
                      <p className="text-[10px] text-gray-600 mb-3">
                        Sponsorun bakmakla yükümlü olduğu kişi sayısına göre minimum hacze karşı korunan net aylık gelir (Pfändungsfreigrenzen):
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[10px] border border-green-200">
                          <thead className="bg-green-100">
                            <tr>
                              <th className="border border-green-200 px-2 py-1 text-left">Bakmakla Yükümlü Kişi Sayısı</th>
                              <th className="border border-green-200 px-2 py-1 text-left">Hacze Karşı Korunan Net Aylık Gelir (€)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-green-200 px-2 py-1">0 kişi (bekar, çocuksuz)</td>
                              <td className="border border-green-200 px-2 py-1 font-semibold">2.980,00 € ve üzeri</td>
                            </tr>
                            <tr className="bg-green-50">
                              <td className="border border-green-200 px-2 py-1">1 kişi (örn: eş veya 1 çocuk)</td>
                              <td className="border border-green-200 px-2 py-1 font-semibold">4.130,00 € ve üzeri</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[9px] text-gray-600 mt-3">
                        <strong>Not:</strong> 4.767,00 € üzerindeki gelirler tamamen hacze konu olabilir ("Der Mehrbetrag über 4.766,99 Euro ist voll pfändbar").
                      </p>
                      <p className="text-[9px] text-gray-500 mt-2">
                        💡 Kaynak: Almanya Resmi Gazetesi - Pfändungsfreigrenzen 2025 
                        (<a 
                          href="https://stadt.muenchen.de/dam/jcr:dad64ccb-c95b-4746-8a7f-94327827af20/Pfaendungsfreigrenzen_2025.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline hover:text-green-700"
                        >Detaylı Tablo</a>)
                      </p>
                      <p className="text-[9px] text-amber-700 mt-2">
                        ⚠️ Bu miktarlar haciz muafiyeti limitlerine (Pfändungsfreigrenzen) dayanır. VE için yabancılar dairesi, sponsorun bu limitler üzerinde gelire sahip olmasını ve bakmakla yükümlü olduğu kişileri de göz önünde bulundurarak yeterli finansal güce sahip olduğunu değerlendirir.
                      </p>
                    </div>
                  </div>

                  {/* How to Get VE */}
                  <div className="bg-white border border-green-200 rounded p-4">
                    <p className="text-sm font-semibold text-green-900 mb-3">✔ Nasıl Alınıyor?</p>
                    <div className="text-xs text-gray-700 space-y-2">
                      <p><strong>1.</strong> Sponsor kendi şehrindeki <strong>Ausländerbehörde / Kreisverwaltung / Bürgeramt</strong>'a gider</p>
                      <p><strong>2.</strong> "Verpflichtungserklärung §68 AufenthG" talep eder</p>
                      <p><strong>3.</strong> Bordro, kira kontratı ve kimlik ile başvurur</p>
                      <p><strong>4.</strong> Belgeler onaylandıktan sonra resmi VE belgesini alır</p>
                      <p><strong>5.</strong> Bu belge vize başvurusunda sunulur</p>
                    </div>
                  </div>

                  {/* What VE Covers */}
                  <div className="bg-white border border-green-200 rounded p-4">
                    <p className="text-sm font-semibold text-green-900 mb-3">✔ Bu Belge Neyi Kapsar?</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Tüm yaşam masrafları</li>
                      <li>• Barınma</li>
                      <li>• Sağlık sigortası</li>
                      <li>• Geri dönüş masrafları</li>
                      <li>• Devlete doğabilecek tüm borçlar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Required Documents for Visa */}
            <Card className="border-2 border-purple-300 bg-purple-50">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-purple-900">📋 Vize İçin Gerekli Belgeler</h3>
                
                <div className="bg-white border border-purple-200 rounded-lg p-5">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Pasaport</strong>
                        <p className="text-xs text-gray-600 mt-1">Geçerli pasaport</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Almanca Dil Yeterliliği Belgesi</strong>
                        <p className="text-xs text-gray-600 mt-1">TELC A1/A2 veya Goethe A1/A2 sertifikası</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Tam Zamanlı Programa Kabul Belgesi</strong>
                        <p className="text-xs text-gray-600 mt-1">Üniversiteden gelen kabul mektubu</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Hazırlık Dil Kursu Kayıt Onayı</strong>
                        <p className="text-xs text-gray-600 mt-1">Eğer dil kursuna gidecekseniz</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Öğrenim Niyeti Mektubu</strong>
                        <p className="text-xs text-gray-600 mt-1">Serbest yazılmış niyet mektubu</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Finansal Kanıt</strong>
                        <p className="text-xs text-gray-600 mt-1">Kilitli hesap veya Verpflichtungserklärung</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3 pb-3 border-b border-purple-100">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">CV (Özgeçmiş)</strong>
                        <p className="text-xs text-gray-600 mt-1">Güncel CV</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold text-lg">✓</span>
                      <div>
                        <strong className="text-purple-900">Sağlık Sigortası Belgesi</strong>
                        <p className="text-xs text-gray-600 mt-1">SGK aracılığıyla alınabilir (detaylar aşağıda)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Health Insurance via SGK */}
            <Card className="border-2 border-teal-300 bg-teal-50">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-teal-900">🏥 Sağlık Sigortası Seçenekleri</h3>
                
                <div className="bg-white border border-teal-200 rounded-lg p-5 space-y-4">
                  <p className="text-sm text-teal-800 font-semibold">
                    Vize başvurusu için sağlık sigortası zorunludur. Üç farklı seçeneğiniz var:
                  </p>

                  {/* Option 1: SGK */}
                  <div className="bg-teal-50 border border-teal-300 rounded-lg p-4 space-y-3">
                    <h4 className="font-bold text-teal-900">📋 Seçenek 1: SGK Üzerinden (Ücretsiz)</h4>
                    <p className="text-sm text-teal-800">
                      Ön lisans, lisans veya yüksek lisans eğitimi için gidecekseniz, SGK aracılığıyla ücretsiz sağlık sigortası alabilirsiniz.
                    </p>
                    
                    <div className="bg-white border border-teal-200 rounded p-3">
                      <p className="text-xs font-semibold text-teal-900 mb-2">İlçenizdeki SGK'ya Götürmeniz Gereken Belgeler:</p>
                      <ul className="text-xs text-teal-800 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold">1.</span>
                          <span>Yurt dışında üniversiteden <strong>kabul edildiğinize dair belge</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold">2.</span>
                          <span>
                            Öğrenim görülen üniversite/fakültenin <strong>ön lisans, lisans veya yüksek lisans seviyesinde olduğunu gösteren belge</strong>
                            <br />
                            <span className="text-[10px] text-gray-600">(e-Devlet, YÖK veya Türkiye'nin dış temsilciliklerinden alınabilir)</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold">3.</span>
                          <span>Okulun <strong>sömestr tarihlerini gösterir belge</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold">4.</span>
                          <span>
                            <strong>"Sosyal Güvenlik Sözleşmesi İmzalanmış Ülkelerde Sağlık Yardımları Talep ve Beyan Taahhüt Belgesi"</strong>
                            <br />
                            <span className="text-[10px] text-gray-600">(Bu belgeyi SGK'dan alıp doldurup imzalayarak teslim etmeniz gerekiyor)</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Option 2: Sperrkonto Banks */}
                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 space-y-3">
                    <h4 className="font-bold text-blue-900">🏦 Seçenek 2: Sperrkonto Bankalarının Sigorta Hizmeti</h4>
                    <p className="text-sm text-blue-800">
                      Eğer kilitli hesap (Sperrkonto) açtıysanız, bazı bankalar anlaşmalı sigorta kurumları aracılığıyla sağlık sigortası da sunuyor.
                    </p>
                    
                    <div className="bg-white border border-blue-200 rounded p-3">
                      <p className="text-xs text-blue-900 font-medium mb-2">Örnek Bankalar:</p>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• <strong>Fintiba:</strong> Hesap açarken ek sigorta paketi seçeneği</li>
                        <li>• <strong>Expatrio:</strong> Combo paketi (hesap + sigorta)</li>
                        <li>• <strong>Deutsche Bank:</strong> Anlaşmalı sigorta şirketleri ile paket</li>
                      </ul>
                      <p className="text-[10px] text-gray-600 mt-2">
                        💡 Hesap açarken sigorta seçeneklerini kontrol edin, genellikle paket halinde daha uygun olabilir.
                      </p>
                    </div>
                  </div>

                  {/* Option 3: Private Insurance */}
                  <div className="bg-purple-50 border border-purple-300 rounded-lg p-4 space-y-3">
                    <h4 className="font-bold text-purple-900">🔒 Seçenek 3: Özel Sigorta Şirketleri (Ücretli)</h4>
                    <p className="text-sm text-purple-800">
                      Almanya'daki özel sigorta şirketlerinden direkt hizmet alabilirsiniz. Ücretlidir ancak daha kapsamlı kapsama sunabilir.
                    </p>
                    
                    <div className="bg-white border border-purple-200 rounded p-3">
                      <p className="text-xs text-purple-900 font-medium mb-2">Popüler Özel Sigorta Şirketleri:</p>
                      <ul className="text-xs text-purple-800 space-y-1">
                        <li>• <strong>Dr. Walter</strong></li>
                        <li>• <strong>Mawista</strong></li>
                        <li>• <strong>Care Concept</strong></li>
                        <li>• <strong>HanseMerkur</strong></li>
                      </ul>
                      <p className="text-[10px] text-gray-600 mt-2">
                        ⚠️ Özel sigortalar ücretlidir (genelde ~30-100 EUR/ay). SGK veya banka paketleri daha ekonomik olabilir.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-300 rounded p-4">
                    <p className="text-xs text-amber-800">
                      <strong>⚠️ Önemli:</strong> Hangi seçeneği tercih ederseniz edin, vize başvurusu için geçerli bir sağlık sigortası belgesine ihtiyacınız vardır. Sigorta Almanya'nın kabul ettiği standartlarda olmalıdır.
                    </p>
                  </div>
                  
                  <p className="text-xs text-teal-700">
                    💡 <strong>Öneri:</strong> SGK ücretsiz olduğu için önce bu seçeneği değerlendirin. Uygun değilse Sperrkonto bankasının sunduğu pakete bakın.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Application */}
            <Card className="border-2 border-indigo-300 bg-indigo-50">
              <CardContent className="pt-8 pb-8 space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-900">🌐 Dijital Vize Başvurusu</h3>
                
                <div className="bg-white border border-indigo-200 rounded-lg p-5 space-y-3">
                  <p className="text-sm text-indigo-800">
                    Tüm belgeleri hazırladıktan sonra, vize başvurunuzu dijital olarak yapmanız gerekiyor.
                  </p>
                  
                  <div className="bg-indigo-100 border border-indigo-300 rounded p-4 text-center">
                    <p className="text-sm font-semibold text-indigo-900 mb-2">Başvuru Adresi:</p>
                    <a 
                      href="https://digital.diplo.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-indigo-600 underline hover:text-indigo-700"
                    >
                      digital.diplo.de
                    </a>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
                    <p className="text-xs text-indigo-800">
                      <strong>Adımlar:</strong>
                    </p>
                    <ol className="text-xs text-indigo-800 space-y-1 mt-2 ml-4 list-decimal">
                      <li>digital.diplo.de adresine gidin</li>
                      <li>Hesap oluşturun</li>
                      <li>Vize türü olarak "Öğrenci Vizesi (D-Vize)" seçin</li>
                      <li>Tüm belgeleri yükleyin</li>
                      <li>Randevu alın</li>
                      <li>Konsolosluğa gidin ve başvurunuzu tamamlayın</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-amber-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="w-10 h-10 text-amber-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">Sık Yapılan Hatalar</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-amber-200 bg-white">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold text-lg mb-2">❌ Eksik Çeviri</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tüm belgelerin noter onaylı çevirisi olmalı. Eksik belge başvurunuzu reddeder.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold text-lg mb-2">❌ Yanlış Formatta PDF</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Belgelerin okunabilir, net ve doğru formatta olduğundan emin olun.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold text-lg mb-2">❌ Yanlış Üniversite Şartları</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Her üniversitenin farklı şartları var. Önceden araştırın ve doğru bilgiye göre hazırlanın.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold text-lg mb-2">❌ Danışmanlık Firmalarına Gereksiz Ödeme</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tüm bu işlemleri kendiniz yapabilirsiniz. Binlerce lira harcamayın.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <CheckSquare className="w-10 h-10" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">Tüm Süreç İçin Gerekli Belgeler</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Başvurudan vizeye kadar tüm adımlarda ihtiyacınız olacak belgeler
            </p>
            
            <div className="space-y-6">
              {/* ÖSYM Belgeleri */}
              <Card className="border-2 border-blue-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">📄 ÖSYM Belgeleri</h3>
                  <div className="space-y-2">
                    {[
                      "ÖSYM YKS Sonuç Belgesi (Islak imzalı, mühürlü)",
                      "ÖSYM YKS Yerleştirme Belgesi (Islak imzalı, mühürlü)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Diploma ve Onaylar */}
              <Card className="border-2 border-purple-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">🎓 Diploma ve Onaylar</h3>
                  <div className="space-y-2">
                    {[
                      "Lise Diploması (İlçe Milli Eğitim Müdürlüğü imzalı ve mühürlü)",
                      "Üniversite Öğrenci Belgesi (İsteğe bağlı - aktif öğrenciler için, İngilizce)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tercüme ve Apostil */}
              <Card className="border-2 border-orange-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">🌐 Almanca Noter Onaylı Tercümeler ve Apostil</h3>
                  <div className="space-y-2">
                    {[
                      "Lise Diploması Almanca Tercümesi (Noter onaylı)",
                      "YKS Sonuç Belgesi Almanca Tercümesi (Noter onaylı)",
                      "YKS Yerleştirme Belgesi Almanca Tercümesi (Noter onaylı)",
                      "Tüm Belgelerin Apostil Kağıtları (Kaymakamlık, Valilik, Almanya Başkonsolosluğu)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Uni-Assist Belgeleri */}
              <Card className="border-2 border-green-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-4 text-green-900">🏫 Uni-Assist İçin Belgeler</h3>
                  <div className="space-y-2">
                    {[
                      "Pasaport (Geçerli pasaport fotokopisi)",
                      "Almanca CV (İsteğe bağlı - Lebenslauf formatında)",
                      "Almanca Motivasyon Mektubu (İsteğe bağlı - Bewerbungsschreiben)",
                      "Tüm belgelerin taranmış PDF halleri (İngilizce dosya isimleriyle)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vize Belgeleri */}
              <Card className="border-2 border-pink-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-900">✈️ Vize İçin Belgeler</h3>
                  <div className="space-y-2">
                    {[
                      "Almanca Dil Sertifikası (TELC, Goethe veya ÖSD)",
                      "Üniversite Kabul Mektubu",
                      "Dil Kursu Kayıt Onayı (Eğer gerekiyorsa)",
                      "Öğrenim Niyeti Mektubu (Serbest yazılmış)",
                      "Finansal Kanıt (Kilitli hesap veya Verpflichtungserklärung)",
                      "Güncel CV",
                      "Sağlık Sigortası Belgesi",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Genel Yorumlar Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div id="genel-yorumlar" className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">Genel Sorular & Yorumlar</h3>
              </div>
              <p className="text-sm text-blue-800 mb-6 text-center">
                Süreçle ilgili genel sorularınızı, deneyimlerinizi ve önerilerinizi paylaşabilirsiniz.
              </p>
              <Comments term="Genel Sorular ve Yorumlar" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block bg-primary/10 rounded-full p-4 mb-4">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Her Şeyi Öğrendin! 🎉
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Artık <strong className="text-primary">fırsatçılara gereksiz para kaptırmana gerek yok.</strong>
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto border-2 border-primary/20">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Gördüğün üzere <strong className="text-primary">tüm süreç senin tarafından yapılabiliyor!</strong>
              </p>
              <p className="text-md text-gray-600 mt-4">
                Binlerce lira danışmanlık ücreti ödemen gerekmiyor. Bu rehberdeki adımları takip ederek başvurunu kendin tamamlayabilirsin.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-2xl font-semibold text-gray-800">
                Başarılar dileriz! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Comment Button */}
      <button
        onClick={() => {
          const commentsSection = document.getElementById('genel-yorumlar');
          if (commentsSection) {
            commentsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center gap-2 group"
        aria-label="Yorumlar"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Tartışma
        </span>
      </button>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Footer Bilgisi */}
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bu site bağımsız bir bilgi kaynağıdır ve profesyonel danışmanlık hizmeti sunmamaktadır. Tüm bilgiler genel
                amaçlı bilgilendirme içindir.
              </p>
              <p className="text-sm text-muted-foreground">Resmi kurumlarla herhangi bir bağlantımız bulunmamaktadır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
