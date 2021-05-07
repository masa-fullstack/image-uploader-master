const Card: React.FC = ({ children }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg sm:py-16 py-5 px-10 sm:w-120 w-full max-w-3xl mx-auto">
      {children}
    </div>
  )
}

export default Card
