const muscles = {
  neck: {
    sternocleidomastoid: 0,
    splenius: {
      cable: 0,
      lever: 0,
      weighted: 0,
    },
  },
  shoulders: {
    deltoid: {
      anterior: 0,
      lateral: 0,
      posterior: 0,
    },
    supraspinatus: 0,
  },
  'upper arms': {
    'triceps brachii': 0,
    'biceps brachii': 0,
    brachialis: 0,
  },
  forearms: {
    brachioradialis: 0,
    wrist: {
      flexors: 0,
      extensors: 0,
    },
    pronators: 0,
    supinators: 0,
  },
  back: {
    general: 0,
    'latissimus dorsi & teres major': 0,
    trapezius: {
      upper: 0,
      middle: 0,
      lower: 0,
    },
    'levator scapulae': 0,
    rhomboids: 0,
    'infraspinatus & teres minor': 0,
    subscapularis: 0,
  },
  chest: {
    general: 0,
    'pectoralis major': {
      sternal: 0,
      clavicular: 0,
    },
    'pectoralis minor': 0,
    'serratus anterior': 0,
  },
  waist: {
    'rectus abdominis': 0,
    'transverse abdominis': 0,
    obliques: 0,
    'quadratus lumborum': 0,
    'erector spinae': 0,
  },
  hips: {
    'gluteus maximus': 0,
    abductors: 0,
    flexors: 0,
    'deep external rotators': 0,
  },
  thighs: {
    quadriceps: 0,
    hamstrings: 0,
    'hip adductors': 0,
  },
  calves: {
    general: 0,
    gastrocnemius: 0,
    soleus: 0,
    'tibialis anterior': 0,
    popliteus: 0,
  },
};

module.exports = muscles;
