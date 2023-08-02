import { FC } from 'react'
import { Separator } from './ui/separator'
import AvatarComponent from './avatar'


interface DescriptionProps {
  label: string
  desc: string
}

const Description: FC<DescriptionProps> = ({ label, desc }) => {
  return (
    <>
      <div className="flex gap-2.5">
        <AvatarComponent />
        <div className="flex flex-col space-y-1.5">
          <h4 className="text-base font-semibold leading-none">{label}</h4>
          <p className="text-sm">
            {desc}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  )

}
export default Description

