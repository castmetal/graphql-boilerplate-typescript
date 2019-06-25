export default {
  users: {
    'id-user-clark-kent': {
      id: 'id-user-clark-kent',
      name: 'Clark Kent',
      email: 'clark.kent@editorasanar.com',
      username: 'clark.kent',
      status: 'active',
      facebook_id: 'FB123',
    },
    'id-user-bruce-wayne': {
      id: 'id-user-bruce-wayne',
      name: 'Bruce Wayne',
      email: 'bruce.wayne@editorasanar.com',
      username: 'bruce.wayne',
      status: 'active',
      facebook_id: 'FB123',
    },
    'id-user-diana-prince': {
      id: 'id-user-diana-prince',
      name: 'Diana Prince',
      email: 'diana.prince@editorasanar.com',
      username: 'diana.prince',
      status: 'active',
      facebook_id: '',
    },
  },
  questions: {
    'id-question-1': {
      id: 'id-question-1',
      uuid: '157f3965',
      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'radiobox',
      year: 2019,
      observation: 'Vestibulum magna urna, sagittis sit amet magna id',
      status: 'active',
      institutionId: 'id-institution-ufba',
      difficultyId: 'id-difficulty-low',
      boardId: 'id-board-fcc',
      commentsId: ['id-comment-1', 'id-comment-2'],
      alternativesId: ['id-alternative-1', 'id-alternative-2'],
      specialtiesId: ['id-specialty-health', 'id-specialty-pharmacy'],
      tagId: ['id-tag-dc'],
    },
    'id-question-2': {
      id: 'id-question-2',
      uuid: '46d16be6',
      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'radiobox',
      year: 2018,
      observation: 'Vestibulum magna urna, sagittis sit amet magna id',
      status: 'active',
      institutionId: 'id-institution-ufba',
      difficultyId: 'id-difficulty-medium',
      boardId: 'id-board-fgv',
      commentsId: ['id-comment-1', 'id-comment-2'],
      alternativesId: ['id-alternative-1', 'id-alternative-2'],
      specialtiesId: ['id-specialty-health', 'id-specialty-medicine'],
      tagId: ['id-tag-marvel'],
    },
    'id-question-3': {
      id: 'id-question-3',
      uuid: '102909e0',
      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'radiobox',
      year: 2017,
      observation: 'Vestibulum magna urna, sagittis sit amet magna id',
      status: 'active',
      institutionId: 'id-institution-ufba',
      difficultyId: 'id-difficulty-hard',
      boardId: 'id-board-fgv',
      commentsId: ['id-comment-1', 'id-comment-2'],
      alternativesId: ['id-alternative-1', 'id-alternative-2'],
      specialtiesId: ['id-specialty-health', 'id-specialty-medicine'],
      tagId: ['id-tag-dc', 'id-tag-marvel'],
    },
  },
  institutions: {
    'id-institution-ufba': {
      id: 'id-institution-ufba',
      name: 'Universidade Federal da Bahia',
      scope: 'federal',
      status: 'active',
      state: 'BA',
      acronym: 'UFBA',
    },
    'id-institution-uneb': {
      id: 'id-institution-uneb',
      name: 'Universidade do Estado da Bahia',
      scope: 'state',
      status: 'active',
      state: 'BA',
      acronym: 'UNEB',
    },
  },
  difficulties: {
    'id-difficulty-low': {
      id: 'id-difficulty-low',
      name: 'low',
      level: 1,
    },
    'id-difficulty-medium': {
      id: 'id-difficulty-medium',
      name: 'medium',
      level: 5,
    },
    'id-difficulty-hard': {
      id: 'id-difficulty-hard',
      name: 'hard',
      level: 10,
    },
  },
  specialties: {
    'id-specialty-health': {
      id: 'id-specialty-health',
      name: 'Health',
      slug: 'health',
      status: 'active',
      parent_id: null,
      knowledge_area_id: 1,
    },
    'id-specialty-pharmacy': {
      id: 'id-specialty-pharmacy',
      name: 'Pharmacy',
      slug: 'pharmacy',
      status: 'active',
      parent_id: null,
      knowledge_area_id: 2,
    },
    'id-specialty-medicine': {
      id: 'id-specialty-medicine',
      name: 'Medicine',
      slug: 'medicine',
      status: 'active',
      parent_id: null,
      knowledge_area_id: 3,
    },
    'id-specialty-surgery': {
      id: 'id-specialty-surgery',
      name: 'Surgery',
      slug: 'surgery',
      status: 'active',
      parent_id: 'id-specialty-medicine',
      knowledge_area_id: 3,
    },
  },
  alternatives: {
    'id-alternative-1': {
      id: 'id-alternative-1',
      text: 'Donec viverra lacus et ligula maximus bibendum',
      question_id: 'id-question-1',
      correct: true,
    },
    'id-alternative-2': {
      id: 'id-alternative-2',
      text: 'Nulla facilisis commodo ante',
      question_id: 'id-question-1',
      correct: false,
    },
    'id-alternative-3': {
      id: 'id-alternative-3',
      text: 'Maecenas faucibus est ut dolor congue',
      correct: false,
    },
  },
  answers: {
    'id-answer-1': {
      id: 'id-answer-1',
      text_answer: '',
      correct: true,
      user_id: 'id-user-diana-prince',
      sanar_platform_id: 'id-app-resmed',
      alternative_ids: [
        'id-alternative-1',
      ],
      quiz_id: '',
      question_id: 'id-question-1',
    },
  },
  boards: {
    'id-board-fcc': {
      name: 'Fundação Carlos Chagas',
      status: 'active',
    },
    'id-board-fgv': {
      name: 'Fundação Getúlio Vargas',
      status: 'active',
    },
    'id-board-vunesp': {
      name: 'Vunesp',
      status: 'active',
    },
  },
  comments: {
    'id-comment-1': {
      id: 'id-comment-1',
      text: 'Quisque eu augue a augue efficitur molestie',
      status: 'published',
      resource_type: 'Question',
    },
    'id-comment-2': {
      id: 'id-comment-2',
      text: 'Quisque eu augue a augue efficitur molestie',
      status: 'published',
      resource_type: 'Question',
    },
    'id-comment-3': {
      id: 'id-comment-3',
      text: 'Quisque eu augue a augue efficitur molestie',
      status: 'published',
      resource_type: 'Course',
    },
  },
  tags: {
    'id-tag-dc': {
      id: 'id-tag-dc',
      name: 'DC Comics',
    },
    'id-tag-marvel': {
      id: 'id-tag-marvel',
      name: 'Marvel',
    },
  },
  flashcards: {
    'id-flashcard-1': {
      id: 'id-flashcard-1',
      front: 'Qual o nome do Batman?',
      back: 'Bruce Wayne',
      specialties: { data: [], count: 0 },
      tags: { data: [], count: 0 },
      owner_id: 'id-user-bruce-wayne',
      created_at: '2019-03-19T18:34:51.044Z',
      updated_at: '2019-03-19T18:34:51.044Z',
      deleted_at: null,
    },
    'id-flashcard-2': {
      id: 'id-flashcard-2',
      front: 'Qual o nome do Super-Homem?',
      back: 'Clark Kent',
      specialties: { data: [], count: 0 },
      tags: { data: [], count: 0 },
      owner_id: 'id-user-clark-kent',
      created_at: '2019-03-19T18:36:51.044Z',
      updated_at: '2019-03-19T18:36:51.044Z',
      deleted_at: null,
    },
  },
  flashcardDecks: {
    'id-flashcard-deck-1': {
      id: 'id-flashcard-deck-1',
      title: 'Flashcards do Batman, por Bruce Wayne',
      description: 'Veja flashcards feitos pelo próprio Batman',
      flashcardId: ['id-flashcard-1'],
      owner_id: 'id-user-bruce-wayne',
      created_at: '2019-03-19T18:35:51.044Z',
      updated_at: '2019-03-19T18:35:51.044Z',
      deleted_at: null,
    },
    'id-flashcard-deck-2': {
      id: 'id-flashcard-deck-2',
      title: 'Flashcards do Super-Homem, por Clark Kent',
      description: 'Veja flashcards feitos pelo próprio Super-Homem',
      flashcardId: ['id-flashcard-2'],
      owner_id: 'id-user-clark-kent',
      created_at: '2019-03-19T18:37:51.044Z',
      updated_at: '2019-03-19T18:37:51.044Z',
      deleted_at: null,
    },
  },
};
