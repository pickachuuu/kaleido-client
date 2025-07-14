// import Test from "../features/overflowTest"
import Card from "@/components/ui/Card"
import ProfileAvatar from "@/components/ui/ProfileAvatar"
import Image from "next/image"
import { Zap, MessageCircle, Repeat2, Heart, Share, ImageIcon } from "lucide-react"

export default function ForYouFeed() {
    const imageUrl = '/images/test/OIP.webp'
    const imageUrl2 = '/images/test/f1_post.jpg'

    
    return (
        <div className="space-y-4 p-4">
            {/* Example post */}
            <Card className="bg-white/10 w-full transition-all duration-200">
                <Card.Content className="p-4">
                    <div className="flex  gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/images/test/tenz_prof.jpg" />

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">TenZ</span>
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-400">@TenZOfficial</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">2h</span>
                            </div>
                            <p className="text-white leading-relaxed">Proud of the PRX guys, easily the most fun playstyle to watch in VALORANT and they have been due for a win 🏆 🥳</p>
                            <div className="flex items-center justify-between pt-3 max-w-md">
                                <button className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>12</span>
                                </button>
                                <button className="text-gray-400 hover:text-green-400 hover:bg-green-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Repeat2 className="w-4 h-4" />
                                    <span>45</span>
                                </button>
                                <button className="text-gray-400 hover:text-pink-400 hover:bg-pink-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Heart className="w-4 h-4" />
                                    <span>234</span>
                                </button>
                                <button className="text-gray-400 hover:text-purple-400 hover:bg-purple-400/10 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Share className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card.Content>
            </Card>

            <Card className="bg-white/10 w-full transition-all duration-200">
                <Card.Content className="p-4">
                    <div className="flex gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/images/test/profile.jpg" />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Formula 1</span>
                                <span className="text-gray-400">@F1</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">9h</span>
                            </div>
                            <p className="text-white leading-relaxed">One week on... 🤯

This season's British Grand Prix race day will go down as a Silverstone classic! 😮‍💨💪</p>
                            <div className="mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 p-4 border border-white/10">
                                {imageUrl2 ? (
                                    <div className="w-full bg-black rounded-lg flex items-center justify-center relative">
                                        <Image 
                                            src={imageUrl2} 
                                            alt="Post image" 
                                            width={800}   // or your image's width
                                            height={600}  // or your image's height
                                            className="object-cover rounded-lg w-full h-auto"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
                                        <ImageIcon className="w-12 h-12 text-white/70" />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between pt-3 max-w-md">
                                <button className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>97</span>
                                </button>
                                <button className="text-gray-400 hover:text-green-400 hover:bg-green-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Repeat2 className="w-4 h-4" />
                                    <span>760</span>
                                </button>
                                <button className="text-gray-400 hover:text-pink-400 hover:bg-pink-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Heart className="w-4 h-4" />
                                    <span>13k</span>
                                </button>
                                <button className="text-gray-400 hover:text-purple-400 hover:bg-purple-400/10 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Share className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card.Content>
            </Card>

            <Card className="bg-white/10 w-full transition-all duration-200">
                <Card.Content className="p-4">
                    <div className="flex gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/images/test/1028818.jpg" />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Uzumaki Naruto</span>
                                <span className="text-gray-400">@NarutoOfficial</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">4h</span>
                            </div>
                            <p className="text-white leading-relaxed">Sasuke bayot hahaaha</p>
                            <div className="mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 p-4 border border-white/10">
                                {imageUrl ? (
                                    <div className="w-full h-48 bg-black rounded-lg flex items-center justify-center relative">
                                        <Image 
                                            src={imageUrl} 
                                            alt="Post image" 
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
                                        <ImageIcon className="w-12 h-12 text-white/70" />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between pt-3 max-w-md">
                                <button className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>23</span>
                                </button>
                                <button className="text-gray-400 hover:text-green-400 hover:bg-green-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Repeat2 className="w-4 h-4" />
                                    <span>67</span>
                                </button>
                                <button className="text-gray-400 hover:text-pink-400 hover:bg-pink-400/10 gap-2 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Heart className="w-4 h-4" />
                                    <span>189</span>
                                </button>
                                <button className="text-gray-400 hover:text-purple-400 hover:bg-purple-400/10 flex items-center rounded-full px-3 py-1 transition-all">
                                    <Share className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card.Content>
            </Card>



        </div>
    )
}