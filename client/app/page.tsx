import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="absolute inset-0 flex g items-center justify-center">
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-16 md:py-24 lg:py-32 my-auto">
                    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF6500] to-white font-sans font-bold mb-6 sm:mb-8 lg:mb-10">
                        Build - Track - Achieve
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-white font-sans font-medium mb-4 sm:mb-6 lg:mb-8">
                        Revolutionize how you work with a tool designed to keep
                        you on track-where productivity meets simplicity.
                    </p>
                    <a href="/login">
                        <Button
                            size="lg"
                            className="p-6 sm:p-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-xl sm:text-2xl w-full sm:w-auto border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                                Use Athena Today
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
            <WavyBackground />
        </main>
    );
}

/* Master username
Type a login ID for the master user of your DB instance.
postgres */

/* 2811E2004z$huevvn|
908027396974
rdsEnjoyer

Account
908027396974
KMS key ID
alias/aws/rds

*/
