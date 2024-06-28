export enum BUTTON_TYPE {
  SUCCESS = 'success',
  DISABLED = 'disabled',
  PRIMARY = 'primary',
  WHITE = 'white',
  GREY = 'grey',
  LIGHT_GREY = 'grey',
  BORDER_BLUE = 'border_blue',
  BORDER_RED = 'border_red',
  BORDER_GREY = 'border_grey',
  DANGER = 'danger'
}

export enum CHART_TYPE {
  LINE = 'line',
  AREA = 'area',
  BAR = 'bar',
  HISTOGRAM = 'histogram',
  PIE = 'pie',
  DONUT = 'donut',
  RADIALBAR = 'radialBar',
  SCATTER = 'scatter',
  BUBBLE = 'bubble',
  HEATMAP = 'heatmap'
}

export enum ICONS_TYPE {
  GRAPH_UP_ARROW = 'graphUpArrow',
  SOLAR_PANEL = 'solarPanel',
  SUN_MACHINE = 'sunMachine',
  ENERGY = 'energy',
  ECO_PROTECT = 'ecoProtect',
  SOLAR_HOUSE = 'solarHouse',
  SOLAR_CONECT = 'solarConect',
  TREES = 'trees',
  CURRENCY_DOLLAR = 'currencyDollar',
  DEFAULT_ICON = 'defaultIcon',
  BELL = 'bell',
  LOGOUT = 'logout',
  PLATAFORM = 'plataform'
}

export enum STATUS_CARD_TYPE {
  NORMAL = 'normal',
  ALERT = 'alert',
  ERROR = 'error',
  OFFLINE = 'offline',
  NOCOMUNICATION = 'nocomunication',
  INVALIDLOGIN = 'invalidLogin',
  GREY = 'grey',
  GREY_BORDER = 'grey_border'
}

export enum GENERIC_CARD_TYPE {
  NORMAL = 'normal',
  ALERT = 'alert',
  ERROR = 'error',
  OFFLINE = 'offline',
  GREY = 'grey',
  GREY_BORDER = 'grey_border'
}

export enum NOTIFICATION_CARD_TYPE {
  ONLINE = 'online',
  ALERT = 'alert',
  OFFLINE = 'offline',
  NOCOMUNICATION = 'nocomunication',
  INFO = 'info'
}

export enum TOAST_CARD_TYPE {
  ONLINE = 'online',
  ALERT = 'alert',
  OFFLINE = 'offline',
  NOCOMUNICATION = 'nocomunication'
}

export enum COLORS {
  PRIMARY = '#001A7A',
  SUCCESS = '#07A707',
  ALERT = '#E47272',
  ERROR = '#E47272',
  OFFLINE = '#CED4DA',
  NOCOMUNICATION = '#373737',
  TRANSPARENT = '#FFFFFF0',
  WHITE = '#FFFFFF',
  OFF_WHITE = '#FCFCFC',
  GHOST_WHITE = '#F8F9FA',
  GREY = '#6C757D',
  LIGHT_GREY = '#CED4DA',
  DARK_GREY = '#343A40',
  BRAND_GREY = '#1a2526',
  UNIFORM_GREY = '#A6A6A6',
  LIGHT_BLUE = '#2BA1CF',
  SLATE = '#ADB5BD',
  WHITE_SMOKE = '#F8F9FA',
  WINTER_BREATH = '#DEE2E6',
  CHARCOAL = '#212529', 
  GREY_BACKGROUND = '#00000075',
  BLACK = '#000000',
  RED = '#d50000a3',
  YELLOW = '#fec211',
  LIGHT_YELLOW = '#fff6e5'
}

export const BREADCRUMB_LINKS = {
  DASHBOARD: [
    {
      title: 'Início',
      href: '/Dashboard'
    }
  ],
  POWER_STATION: [
    {
      title: 'Início',
      href: '/Dashboard'
    },
    {
      title: 'Usinas',
      href: '/power-station'
    }
  ],
  POWER_STATION_DETAILS: [
    {
      title: 'Início',
      href: '/Dashboard'
    },
    {
      title: 'Usinas',
      href: '/power-station'
    },
    {
      title: 'Detalhes',
      href: '/power-station?plantId='
    }
  ]
}

export enum UserStatus {
  Active = 1,
  Inactive = 2
}