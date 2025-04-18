import React from 'react';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";


function GroupCard() {
    return (
        <div className="bg-[#ffeeb4] p-6 rounded-3xl grid h-full justify-items-start">
            <h3 className="font-bold text-2xl mb-4">Your Classmates</h3> 

            <div className='mb-4'>
            <AvatarGroup total={5}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            </div>
            
            <div className='flex gap-4'>
                <button className="mt-2 px-4 py-2 bg-[#f4f0f0]  rounded-lg">View Members</button>
                <button className="mt-2 px-4 py-2 bg-[#785491] text-white rounded-lg">Join Group</button>
            </div>
        </div>
    )
}

export default GroupCard;