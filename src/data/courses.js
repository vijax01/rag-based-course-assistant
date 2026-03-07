const courses = [
    {
      "id": 1,
      "title": "NPTEL-Cloud Computing",
      "author": "Manish Narula",
      "lectures": 25,
      "rating": 4.0,
      "reviews": 2300,
      "badge": "Premium",
      "image": "./course-thumbnails/NPTEL-CC-lec01.avif",
      "enrolled": true,
      "course-details": [
        {
          "video-number": 1,
          "video-title": "NPTEL Cloud Computing Lec 01",
          "video-path": "/videos/NPTEL Cloud Computing Lec 01.mp4",
          "thumbnail-path": "/thumbnails/lec01.avif",
          "duration": "24:58"
        },
        {
          "video-number": 2,
          "video-title": "NPTEL Cloud Computing Lec 02",
          "video-path": "/videos/NPTEL Cloud Computing Lec 02.mp4",
          "thumbnail-path": "/thumbnails/lec02.avif",
          "duration": "31:49"
        },
        {
          "video-number": 3,
          "video-title": "NPTEL Cloud Computing Lec 03",
          "video-path": "/videos/NPTEL Cloud Computing Lec 03.mp4",
          "thumbnail-path": "/thumbnails/lec03.avif",
          "duration": "30:46"
        },
        {
          "video-number": 4,
          "video-title": "NPTEL Cloud Computing Lec 04",
          "video-path": "/videos/NPTEL Cloud Computing Lec 04.mp4",
          "thumbnail-path": "/thumbnails/lec04.avif",
          "duration": "30:15"
        },
        {
          "video-number": 5,
          "video-title": "NPTEL Cloud Computing Lec 05",
          "video-path": "/videos/NPTEL Cloud Computing Lec 05.mp4",
          "thumbnail-path": "/thumbnails/lec05.avif",
          "duration": "29:45"
        },
        {
          "video-number": 6,
          "video-title": "NPTEL Cloud Computing Lec 06",
          "video-path": "/videos/NPTEL Cloud Computing Lec 06.mp4",
          "thumbnail-path": "/thumbnails/lec06.avif",
          "duration": "30:54"
        },
        {
          "video-number": 7,
          "video-title": "NPTEL Cloud Computing Lec 07",
          "video-path": "/videos/NPTEL Cloud Computing Lec 07.mp4",
          "thumbnail-path": "/thumbnails/lec07.avif",
          "duration": "31:36"
        },
        {
          "video-number": 8,
          "video-title": "NPTEL Cloud Computing Lec 08",
          "video-path": "/videos/NPTEL Cloud Computing Lec 08.mp4",
          "thumbnail-path": "/thumbnails/lec08.avif",
          "duration": "25:16"
        },
        {
          "video-number": 9,
          "video-title": "NPTEL Cloud Computing Lec 09",
          "video-path": "/videos/NPTEL Cloud Computing Lec 09.mp4",
          "thumbnail-path": "/thumbnails/lec09.avif",
          "duration": "32:23"
        },
        {
          "video-number": 10,
          "video-title": "NPTEL Cloud Computing Lec 10",
          "video-path": "/videos/NPTEL Cloud Computing Lec 10.mp4",
          "thumbnail-path": "/thumbnails/lec10.avif",
          "duration": "30:26"
        },
        {
          "video-number": 11,
          "video-title": "NPTEL Cloud Computing Lec 11",
          "video-path": "/videos/NPTEL Cloud Computing Lec 11.mp4",
          "thumbnail-path": "/thumbnails/lec11.avif",
          "duration": "32:04"
        },
        {
          "video-number": 12,
          "video-title": "NPTEL Cloud Computing Lec 12",
          "video-path": "/videos/NPTEL Cloud Computing Lec 12.mp4",
          "thumbnail-path": "/thumbnails/lec12.avif",
          "duration": "35:19"
        },
        {
          "video-number": 13,
          "video-title": "NPTEL Cloud Computing Lec 13",
          "video-path": "/videos/NPTEL Cloud Computing Lec 13.mp4",
          "thumbnail-path": "/thumbnails/lec13.avif",
          "duration": "34:37"
        },
        {
          "video-number": 14,
          "video-title": "NPTEL Cloud Computing Lec 14",
          "video-path": "/videos/NPTEL Cloud Computing Lec 14.mp4",
          "thumbnail-path": "/thumbnails/lec14.avif",
          "duration": "32:38"
        },
        {
          "video-number": 15,
          "video-title": "NPTEL Cloud Computing Lec 15",
          "video-path": "/videos/NPTEL Cloud Computing Lec 15.mp4",
          "thumbnail-path": "/thumbnails/lec15.avif",
          "duration": "20:49"
        },
        {
          "video-number": 16,
          "video-title": "NPTEL Cloud Computing Lec 16",
          "video-path": "/videos/NPTEL Cloud Computing Lec 16.mp4",
          "thumbnail-path": "/thumbnails/lec16.avif",
          "duration": "20:47"
        },
        {
          "video-number": 17,
          "video-title": "NPTEL Cloud Computing Lec 17",
          "video-path": "/videos/NPTEL Cloud Computing Lec 17.mp4",
          "thumbnail-path": "/thumbnails/lec17.avif",
          "duration": "21:31"
        },
        {
          "video-number": 18,
          "video-title": "NPTEL Cloud Computing Lec 18",
          "video-path": "/videos/NPTEL Cloud Computing Lec 18.mp4",
          "thumbnail-path": "/thumbnails/lec18.avif",
          "duration": "17:53"
        },
        {
          "video-number": 19,
          "video-title": "NPTEL Cloud Computing Lec 19",
          "video-path": "/videos/NPTEL Cloud Computing Lec 19.mp4",
          "thumbnail-path": "/thumbnails/lec19.avif",
          "duration": "17:35"
        },
        {
          "video-number": 20,
          "video-title": "NPTEL Cloud Computing Lec 20",
          "video-path": "/videos/NPTEL Cloud Computing Lec 20.mp4",
          "thumbnail-path": "/thumbnails/lec20.avif",
          "duration": "19:35"
        },
        {
          "video-number": 21,
          "video-title": "NPTEL Cloud Computing Lec 21",
          "video-path": "/videos/NPTEL Cloud Computing Lec 21.mp4",
          "thumbnail-path": "/thumbnails/lec21.avif",
          "duration": "35:59"
        },
        {
          "video-number": 22,
          "video-title": "NPTEL Cloud Computing Lec 22",
          "video-path": "/videos/NPTEL Cloud Computing Lec 22.mp4",
          "thumbnail-path": "/thumbnails/lec22.avif",
          "duration": "33:17"
        },
        {
          "video-number": 23,
          "video-title": "NPTEL Cloud Computing Lec 23",
          "video-path": "/videos/NPTEL Cloud Computing Lec 23.mp4",
          "thumbnail-path": "/thumbnails/lec23.avif",
          "duration": "39:14"
        },
        {
          "video-number": 24,
          "video-title": "NPTEL Cloud Computing Lec 24",
          "video-path": "/videos/NPTEL Cloud Computing Lec 24.mp4",
          "thumbnail-path": "/thumbnails/lec24.avif",
          "duration": "31:42"
        },
        {
          "video-number": 25,
          "video-title": "NPTEL Cloud Computing Lec 25",
          "video-path": "/videos/NPTEL Cloud Computing Lec 25.mp4",
          "thumbnail-path": "/thumbnails/lec25.avif",
          "duration": "32:09"
        }
      ]
    },
    {
      "id": 2,
      "title": "Sigma Web Development",
      "author": "Harris Ali Khan",
      "lectures": 139,
      "rating": 4.7,
      "reviews": 182150,
      "badge": "Premium",
      "image": "./course-thumbnails/sigma-web-dev.png",
      "enrolled": false
    },
    {
      "id": 3,
      "title": "DSA Placement Series",
      "author": "Love Babbar",
      "lectures": 149,
      "rating": 4.8,
      "reviews": 112103,
      "badge": "Premium",
      "image": "./course-thumbnails/dsa-love-babbar.jpg",
      "enrolled": false
    },
    {
      "id": 4,
      "title": "Chai aur JavaScript",
      "author": "Hitesh Choudhary",
      "lectures": 51,
      "rating": 4.9,
      "reviews": 311675,
      "badge": "Premium",
      "image": "./course-thumbnails/hitesh-sir-js.jpg",
      "enrolled": false
    },
    {
      "id": 5,
      "title": "100 days of Python Code",
      "author": "Angela Yu",
      "lectures": 39,
      "rating": 4.9,
      "reviews": 12540,
      "badge": "Premium",
      "image": "./course-thumbnails/python-angela-maam.jpg",
      "enrolled": false
    }
  ]

  export default courses;