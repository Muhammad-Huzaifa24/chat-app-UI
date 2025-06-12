const data = [
  {
    "profileImage": "https://i.pravatar.cc/150?img=1",
    "time": "10:45 AM",
    "name": "Alice Johnson",
    "message": "Hey, how's it going?",
    "isTyping": false,
    "messageCount": 3
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=2",
    "time": "9:32 AM",
    "name": "Bob Smith",
    "message": "Let's catch up later.",
    "isTyping": true,
    "messageCount": 1
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=3",
    "time": "Yesterday",
    "name": "Charlie Adams",
    "message": "Meeting rescheduled.",
    "isTyping": false,
    "messageCount": 0
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=4",
    "time": "Mon",
    "name": "Diana Prince",
    "message": "I'll send the report soon.",
    "isTyping": false,
    "messageCount": 2
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=5",
    "time": "8:15 AM",
    "name": "Ethan Lee",
    "message": "Great job yesterday!",
    "isTyping": true,
    "messageCount": 5
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=6",
    "time": "Tue",
    "name": "Fiona Brown",
    "message": "Can you review this?",
    "isTyping": false,
    "messageCount": 0
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=7",
    "time": "Wed",
    "name": "George Wilson",
    "message": "Let's meet at 3 PM.",
    "isTyping": false,
    "messageCount": 4
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=8",
    "time": "Just now",
    "name": "Hannah Davis",
    "message": "I'm on my way!",
    "isTyping": true,
    "messageCount": 0
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=9",
    "time": "Fri",
    "name": "Ian Turner",
    "message": "Got the files.",
    "isTyping": false,
    "messageCount": 6
  },
  {
    "profileImage": "https://i.pravatar.cc/150?img=10",
    "time": "10:05 PM",
    "name": "Julia Clark",
    "message": "See you soon!",
    "isTyping": false,
    "messageCount": 1
  }
];

const Messages = [
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Hey, how are you?",
    "recieveMessage": "I'm good, thanks! How about you?",
    "senderName": "Huzaifa",
    "recieverName": "Ali",
    "time": "2025-06-12T09:00:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Are we still meeting today?",
    "recieveMessage": "Yes, 5 PM at the café.",
    "senderName": "Ali",
    "recieverName": "Huzaifa",
    "time": "2025-06-12T09:05:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Don't forget to bring the charger.",
    "recieveMessage": "Sure, already packed it.",
    "senderName": "Huzaifa",
    "recieverName": "Ali",
    "time": "2025-06-12T09:10:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Got the files you sent. Reviewing them now.",
    "recieveMessage": "Awesome, let me know if you have any questions.",
    "senderName": "Ali",
    "recieverName": "Huzaifa",
    "time": "2025-06-12T09:20:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Did you finish the UI updates?",
    "recieveMessage": "Yes, pushed to GitHub an hour ago.",
    "senderName": "Huzaifa",
    "recieverName": "Ali",
    "time": "2025-06-12T09:30:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Let’s plan the demo call for tomorrow.",
    "recieveMessage": "Sounds good. Morning or afternoon?",
    "senderName": "Ali",
    "recieverName": "Huzaifa",
    "time": "2025-06-12T09:45:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Morning works better. Around 10 AM?",
    "recieveMessage": "Perfect. Sending the invite now.",
    "senderName": "Huzaifa",
    "recieverName": "Ali",
    "time": "2025-06-12T09:50:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Great work on the presentation slides!",
    "recieveMessage": "Thanks! Took a while to get the animations right.",
    "senderName": "Ali",
    "recieverName": "Huzaifa",
    "time": "2025-06-12T10:00:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Want to grab lunch after the call?",
    "recieveMessage": "Sure, let’s go to that new place on Main Street.",
    "senderName": "Huzaifa",
    "recieverName": "Ali",
    "time": "2025-06-12T10:15:00Z"
  },
  {
    "ReciverProfileImage": "https://i.pravatar.cc/150?img=10",
    "SenderProfileImage": "https://i.pravatar.cc/150?img=9",
    "sendMessage": "Cool. See you then!",
    "recieveMessage": "See you! 😊",
    "senderName": "Ali",
    "recieverName": "Huzaifa",
    "time": "2025-06-12T10:20:00Z"
  }
]

export { data, Messages }
