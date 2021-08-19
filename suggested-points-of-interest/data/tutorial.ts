const instructions = {
  el: [
    {
      header: 'Διάλεξε τι σου αρέσει',
      paragraph:
        'Θα σου παραθέσω μερικά σημεία ενδιαφέροντος και θα ήθελα να βαθμολογήσεις αυτά που σου αρέσουν ή θα ήθελες να επισκεφθείς',
      image: '/assets/images/suggested-points-of-interest/tutorial-1.svg',
    },
    {
      header: 'Οι ερωτήσεις που μπορώ να απαντήσω',
      paragraph:
        'Εάν έχεις κάποιο συγκεκριμένο ερώτημα για σημείο ενδιαφέροντος, μπορείς να διαλέξεις συγκεκριμένα ερωτήματα και εγώ θα προσπαθήσω να σου δώσω απαντήσεις. Εδώ θα διαλέξεις εάν θέλεις τα ερωτήματά σου',
      image: '/assets/images/suggested-points-of-interest/tutorial-2.svg',
    },
    {
      header: 'Οι προτάσεις μου για σημεία ενδιαφέροντος',
      paragraph:
        'Εδώ θα σου εμφανίσω σε μία λίστα τις προτάσεις μου για τα σημεία ενδιαφέροντος που πιθανώς θέλεις να επισκεφτείς ή τις τοποθεσίες που απαντούν στις ερωτήσεις σου',
      image: '/assets/images/suggested-points-of-interest/tutorial-3.svg',
    },
  ],
  en: [
    {
      header: 'Choose what you like',
      paragraph:
        'I will list for you some Points of Interest and I would like you to rate the ones you like or would like to visit',
      image: '/assets/images/suggested-points-of-interest/tutorial-1.svg',
    },
    {
      header: 'The questions I can answer',
      paragraph:
        'If you have a specific question for a point of interest, you can choose specific questions and I will try to give you answers. Here you will choose your questions, if you have any',
      image: '/assets/images/suggested-points-of-interest/tutorial-2.svg',
    },
    {
      header: 'My suggestions for points of interest',
      paragraph:
        'Here I will show you in a list my suggestions for the points of interest you probably want to visit or the locations that answer your questions',
      image: '/assets/images/suggested-points-of-interest/tutorial-3.svg',
    },
  ],
};

export const TutorialIntro = {
  el: {
    header: 'Tutorial',
    paragraph:
      'Για να σου δώσω τις προτάσεις μου, ως προσωπικός σου ξεναγός, θα πρέπει να μάθω περισσότερα στοιχεία για σένα. Για να γίνει αυτό, θέλω να μου πεις τι σου αρέσει από τις εικόνες που θα σου δείξεω. Ακολουθεί mini tutorial για να γνωρίσεις τη διαδικασία.',
    image: '/assets/images/suggested-points-of-interest/tutorial-0.svg',
  },
  en: {
    header: 'Tutorial',
    paragraph:
      'To give you my suggestions, as your personal guide, I need to know more about you. To do this, I want you to tell me which points of interest you like from the pictures I will show you. Here is a mini tutorial to get acquainted with the process.',
    image: '/assets/images/suggested-points-of-interest/tutorial-0.svg',
  },
};

export default { ...instructions };
