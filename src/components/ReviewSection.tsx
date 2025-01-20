"use client";
import { useState } from "react";
import Image from "next/image";

// Define the type for the comment structure
interface Comment {
  name: string;
  occupation: string;
  message: string;
  date: string;
  image: string;
}

// Accept carId as a prop
interface ReviewsSectionProps {
  carId: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({}) => {
  const [visibleReviews, setVisibleReviews] = useState(2);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    name: "",
    occupation: "",
    message: "",
  });

  const avatarImages = [
    "/pic1.jpg",
    "/pic2.jpeg",
    "/pic3.jpeg",
    "/pic4.jpg",
    "/pic5.jpg",
  ];

  const reviews = [
    {
      id: 1,
      name: "Danish Haji",
      date: "1 Jun 2024",
      role: "CEO at Fantasia",
      text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/pic1.jpg",
    },
    {
      id: 2,
      name: "Areesha Rehmat",
      date: "2 Jan 2025",
      role: "CEO at Bhakkar",
      text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/pic3.jpeg",
    },
    {
      id: 3,
      name: "Muhammad Hasnain Rao",
      date: "15 Oct 2024",
      role: "Marketing Manager at Google",
      text: "Morent App offers fantastic services with excellent car options. Their support team is responsive and very professional.",
      image: "/pic2.jpeg",
    },
    {
      id: 4,
      name: "Muhammad Zubair Rao",
      date: "20 Dec 2024",
      role: "CTO at Microsoft",
      text: "Using Morent App has been a wonderful experience. Affordable prices and excellent car variety are their strong points.",
      image: "/pic4.jpg",
    },
  ];

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.name.trim() !== "" && newComment.message.trim() !== "") {
      const randomImage = avatarImages[Math.floor(Math.random() * avatarImages.length)];
      setComments([
        ...comments,
        {
          ...newComment,
          date: new Date().toLocaleDateString(),
          image: randomImage,
        },
      ]);
      setNewComment({ name: "", occupation: "", message: "" });
    }
  };

  return (
    <div className="py-12 max-w-6xl mx-auto px-4">
      <div className="flex items-center space-x-4 mb-5">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <span className="text-white bg-[#3563E9] px-3 py-1 rounded-md">
          {reviews.length}
        </span>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div
            key={review.id}
            className="p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 border-b last:border-b-0"
          >
            <Image
              src={review.image || "/placeholder.svg"}
              alt={review.name}
              width={100}
              height={100}
              className="rounded-full mx-auto sm:mx-0"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
              <p className="text-gray-400 mt-2">{review.role}</p>
              <p className="mt-4 text-gray-600">{review.text}</p>
            </div>
          </div>
        ))}
        {visibleReviews < reviews.length && (
          <div className="text-center my-6">
            <button
              onClick={handleShowMore}
              className="text-gray-500 hover:underline"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6">User Comments</h3>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <Image
              src={comment.image || "/placeholder.svg"}
              alt={comment.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">{comment.name}</h4>
              <p className="text-sm text-gray-500">{comment.date}</p>
              <p className="text-gray-600">{comment.message}</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleAddComment} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newComment.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={newComment.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#3563E9] text-white py-2 rounded-md"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsSection;
