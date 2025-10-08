import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { hasDataLS } from '../../../utils/LocalStorage';

function TicketCard({ticket, clickHandle}) {
    const [open, setOpen] = useState(true);
    const {id, title, description, customer, priority, status, createdAt} = ticket;

    if(open && hasDataLS(id, "status")){
        setOpen(prev => !prev);
    }

    const cardHandler = ()=> {
        if(open){
            toast.info(`${title} is in progress`);
            setOpen(prev => !prev);
            clickHandle(ticket);
        }
        // console.log("From ticket");
    };

    const {badgeClass, circleClass, badgeTextClass, priorityTextClass} = classFormatting(open, priority);


    if(hasDataLS(id, "resolved")){
        return null;
    }

  return (
    <div onClick={cardHandler}  className="card bg-base-100 card-xl shadow-card">
        <div className="card-body">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-3.5 mb-[2rem]">
                <h3 className="card-title font-medium text-[1.6rem] lg:text-[1.8rem] text-dark-04">
                    {title}
                </h3>
                <div className={badgeClass}>
                    <div className={circleClass}></div>
                    <p className={badgeTextClass}>{open ? status : "In Progress"}</p>
                </div>
            </div>
            <p className='text-dark-05 text-center lg:text-left mb-[2rem] lg:mb-[1.6rem]'>{description}</p>
            <div className="flex lg:justify-between gap-10 lg:gap-4">
                <div className="flex flex-col lg:flex-row items-center gap-[1.6rem]">
                    <p className="font-medium text-dark-05 text-[1.4rem]">{`#${id + 1000}`}</p>
                    <h4 className={`font-medium text-[1.4rem] ${priorityTextClass}`}>{priority.toUpperCase()} PRIORITY</h4>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[1.6rem]">
                    <p className="text-dark-05 text-[1.4rem]">{customer}</p>
                    <h4 className="text-dark-05 text-[1.4rem]">{createdAt}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

function classFormatting(open, priority){
    let priorityTextClass = "";

    if(priority === "Low"){
        priorityTextClass = "text-bg-btn";
    }
    else{
        priorityTextClass = (priority === "Medium")? "text-priority-02" : "text-priority-01";
    }

    const badgeClass = `flex gap-4 items-center order-[-1] lg:order-1 max-w-60 px-[1.2rem] py-2 rounded-full h-14 ${open ? `bg-badge-01` : `bg-badge-02`}`;
    const circleClass = `w-6 h-6 rounded-full ${open ? `bg-bg-btn` : `bg-priority-02`}`;
    const badgeTextClass = `font-medium ${open ? `text-badge-tx-01` : `text-badge-tx-02`}`;

    return {badgeClass, circleClass, badgeTextClass, priorityTextClass}
}

export default TicketCard;