import Image from "next/image"

const UserProfile = () => {
    return (
        <div>
            <div className="flex">
                <Image
                    src="/images/home/profile.png"
                    width={50}
                    height={50}
                    alt="user-image"
                    className="h-[70px] md:w-[70px] rounded-full mt-2 ml-1"
                />
                <div>
                    <h4 className=" text-white ml-5 mt-4">Welcome Admin</h4>
                    <h5 className=" text-white ml-5">admin@kidpro.com</h5>
                </div>
            </div>
            <button className="text-white bg-[#f2994a] w-28 h-10 rounded-md m-2 ml-20" >Logout</button>
        </div>
    )
}
export default UserProfile