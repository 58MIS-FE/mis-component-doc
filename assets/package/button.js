$.fn.button = function (cfg) {
  this.append($('<button></button>').text(cfg.text).css(cfg.css))
}