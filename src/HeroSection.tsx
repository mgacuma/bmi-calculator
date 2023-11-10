export function HeroSection() {
    return (
        <div id="hero-section" className="">
            <div id="hero-text" className="flex flex-col w-[564px]">

                <h1 className="text-gunmental font-semibold text-title leading-none mb-[35px]">Body Mass Index Calculator</h1>
                <p className="text-dark_electric_blue text-base leading-normal">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>

            </div>
            <BmiCalculator />
        </div>
    );
}
