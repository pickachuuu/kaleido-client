import Card from "@/components/ui/Card"
import ProfileAvatar from "@/components/ui/ProfileAvatar"
import { Zap, MessageCircle, Repeat2, Heart, Share, ImageIcon } from "lucide-react"

export default function FollowingFeed() {
    return (
        <div className="space-y-4 p-4">
            {/* Example post */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-xl hover:bg-white/10 transition-all duration-200 w-full">
                <Card.Content className="p-4">
                    <div className="flex gap-3">
                        <ProfileAvatar variant="chat" profileUrl="/profile/" />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">Alex Rivera</span>
                                <span className="text-gray-400">@alexr</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-400">4h</span>
                            </div>
                            <p className="text-white leading-relaxed">Working on a new digital art piece inspired by kaleidoscope patterns. The symmetry and color combinations are absolutely mesmerizing! 🎨</p>
                            <div className="mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 p-4 border border-white/10">
                                <div className="w-full h-48 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
                                    <ImageIcon className="w-12 h-12 text-white/70" />
                                </div>
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