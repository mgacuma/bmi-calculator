import { BMICalculator } from "./bmi-calculator";

export function BMIPage(){
    return (
        <div id='bmi-page' className="font-Inter flex justify-center">
                <div id="hero-section" className="grid grid-cols-2 gap-8 items-center pt-[166px] max-w-[1160px]">
                    <div id="hero-text" className="flex flex-col w-[564px]">
                        <h1 className="text-gunmental font-semibold text-[64px] leading-[70px] tracking-[-0.05em] mb-[35px]">Body Mass <br/> Index Calculator</h1>
                        <p className="max-w-[465px] text-dark_electric_blue text-base leading-normal">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                    </div>
                    <BMICalculator />
                </div>
                <div className="w-[978px] h-[737px] absolute left-6 rounded-b-[35px] bg-gradient-to-tl from-left to-right -z-10">
                    <img className="absolute top-[75px] left-[116px]"  src="logo.svg" />
                </div>
                
        </div>
    )
}