import Image from 'next/image'

const Avatar = ({ src, alt, borderColor }) => {
  return (
    <div
      className={`inline-block border-[3px] border-${borderColor} rounded-full overflow-hidden`}>
      <Image src={src} alt={alt} width={20} height={20} />
    </div>
  )
}

export default Avatar
