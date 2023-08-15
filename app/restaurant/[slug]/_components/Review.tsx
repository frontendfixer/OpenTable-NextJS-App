import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        What 100 people are saying
      </h2>
      <div>
        <div className="mb-7 border-b pb-7">
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}

export default Review
