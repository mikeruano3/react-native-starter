import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Yk5ahdduVKM68NlhRWFStkw0KcwlKd7S0zMkbOqIDnni1Ch5Sn9g0qnYf9dZ5P33e9DrRquL2PA3wET4GQ9Gz1ZZq29eNSSfLGJ8IYuX6QKDA9w5NashqSBS50YaZXYx'
    }
});