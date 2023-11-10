export function BMICalculator(){
    return(
        <div className="bg-white w-[564px] p-8 grid grid-cols-1 gap-8 rounded-2xl drop-shadow-[16px_32px_56px_rgba(143, 174, 207, 1)]" id='calculator-card'>
            <p id='calculator-title' className="text-[24px]/[auto]">Enter your details below</p>
            <div className="grid grid-cols-2">
                <div>
                    <input className="blue-radio" id='metric' checked type='radio' name='units'></input>
                    <label className="pl-[18px] font-semibold" id='label-metric' htmlFor='metric'>Metric</label>
                </div>
                <div>
                    <input className="blue-radio" id='metric' checked type='radio' name='units'></input>
                    <label className="pl-[18px] font-semibold" id='label-metric' htmlFor='metric'>Imperial</label>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="">
                    <label className="block text-dark_electric_blue text-[14px] leading-normal">Height</label>
                    <input className="px-6 py-5 w-[100%] text-gunmental text-[24px] leading-[29px] tracking-tight font-semibold border-borders border-[1px] rounded-xl placeholder:text-borders remove-arrow" type='number' placeholder="0"></input>
                    <span className="text-xl text-blue text-[24px] leading-[29px] font-semibold ml-[-49.41px]">cm</span>
                </div>
                <div className="">
                    <label className="block text-dark_electric_blue text-[14px] leading-normal">Weight</label>
                    <input className="px-6 py-5 w-[100%] text-gunmental text-[24px] leading-[29px] tracking-tight font-semibold border-borders border-[1px] rounded-xl placeholder:text-borders remove-arrow" type='number' placeholder="0"></input>
                    <span className="text-xl text-blue text-[24px] leading-[29px] font-semibold ml-[-49.41px]">kg</span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 bg-blue rounded-r-full rounded-l-2xl p-8">
                <h2 className="text-white text-[24px] leading-[29px] font-semibold">Welcome!</h2>
                <p className="text-white text-[14px] leading-normal">Enter your height and weight and you’ll see your BMI result here</p>
            </div>
        </div>
    )
}