type Props = { name: string; image: string }

export default function ProductCard({ name, image }: Props) {
  return (
    <div className="card product m-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h6 className="card-title m-0">{name}</h6>
      </div>
    </div>
  )
}
