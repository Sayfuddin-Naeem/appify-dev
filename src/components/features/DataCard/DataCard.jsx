function DataCard({item}){
    const {text1, content, text2} = item;
    return(
        <div className='flex flex-col gap-4 lg:gap-6'>
          <p className="">{text1}</p>
          <p className="font-extrabold text-[5.4rem] lg:text-[6.4rem]">{content}</p>
          <p className="">{text2}</p>
        </div>
    );
}

export default DataCard;