import React from 'react'

import { BiDotsHorizontalRounded } from 'react-icons/bi'

function Card() {
  return (
    <div className="w-fit">
        <div className="bg-darkest rounded-xl px-6 py-5">
            <div className="flex items-center justify-between">
                <div className="text-xl font-medium text-light">MERN Task Manager</div>
                <BiDotsHorizontalRounded className="text-light text-2xl"/>
            </div>
            <div className="my-4">
                icons
            </div>
            <div className="text-lg font-medium text-light mb-2">Project Description</div>
            <div className="text-base font-normal text-gray text-ellipsis overflow-hidden line-clamp-3">Task Manager is a web application that allows users to create, manage, and track tasks. Users can register an account, log in, and then create, edit, and delete tasks. Tasks can be categorized and assigned to specific users, and users can mark tasks as completed. The application also provides authentication and authorization features to ensure that only authenticated users can access their own tasks. </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-sm mt-2 px-5 py-1 bg-primary rounded-lg">You</div>
            <div className="text-normal text-light font-light">partners: <span className="text-primary">4</span></div>
        </div>
    </div>
  )
}

export default Card