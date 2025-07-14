// import Test from "../features/overflowTest"
import Card from "@/components/ui/Card"
import ProfileAvatar from "@/components/ui/ProfileAvatar"
import { Zap, MessageCircle, Repeat2, Heart, Share, ImageIcon } from "lucide-react"

export default function ForYouFeed() {
    return (
        <div className="space-y-4 p-4">
            {/* Example post */}
            <Card className="bg-white/10 w-full transition-all duration-200">
                <Card.Content className="p-4">
                    <div className="flex  gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" />

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Derek Berbo</span>
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-400">@cdm.test</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">2h</span>
                            </div>
                            <p className="text-white leading-relaxed">Just discovered this amazing kaleidoscope pattern in nature! The way light refracts through water droplets creates the most beautiful geometric shapes. ✨</p>
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
                    <div className="flex  gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" />

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Derek Berbo</span>
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-400">@cdm.test</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">2h</span>
                            </div>
                            <p className="text-white leading-relaxed">Just discovered this amazing kaleidoscope pattern in nature! The way light refracts through water droplets creates the most beautiful geometric shapes. ✨</p>
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
                    <div className="flex  gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" />

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Derek Berbo</span>
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-400">@cdm.test</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">2h</span>
                            </div>
                            <p className="text-white leading-relaxed">Just discovered this amazing kaleidoscope pattern in nature! The way light refracts through water droplets creates the most beautiful geometric shapes. ✨</p>
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
                    <div className="flex  gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" />

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Derek Berbo</span>
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-400">@cdm.test</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">2h</span>
                            </div>
                            <p className="text-white leading-relaxed">Just discovered this amazing kaleidoscope pattern in nature! The way light refracts through water droplets creates the most beautiful geometric shapes. ✨</p>
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

        </div>
    )
}