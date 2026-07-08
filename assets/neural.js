(() => {
  const canvas = document.getElementById('neural');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = canvas.clientWidth;
  let h = canvas.height = canvas.clientHeight;

  window.addEventListener('resize', () => {
    w = canvas.width = canvas.clientWidth;
    h = canvas.height = canvas.clientHeight;
  });

  const mouse = { x: w / 2, y: h / 2, r: 120 };
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  function rand(min, max){ return Math.random() * (max - min) + min }

  class Node {
    constructor(){
      this.x = rand(0, w);
      this.y = rand(0, h);
      this.vx = rand(-0.2, 0.2);
      this.vy = rand(-0.2, 0.2);
      this.r = rand(1.2, 2.6);
    }
    step(){
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
      // slight drift
      this.vx += rand(-0.01,0.01);
      this.vy += rand(-0.01,0.01);
    }
  }

  const N = Math.max(30, Math.floor((w*h) / 70000));
  const nodes = new Array(N).fill(0).map(() => new Node());

  function draw(){
    ctx.clearRect(0,0,w,h);
    // background subtle vignette
    const g = ctx.createLinearGradient(0,0,w,0);
    g.addColorStop(0, 'rgba(0,0,0,0.06)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);

    // draw connections
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx,dy);
        if (d < 140){
          const alpha = 1 - d / 140;
          ctx.strokeStyle = `rgba(99,102,241,${0.12 * alpha})`;
          ctx.lineWidth = 1 * alpha;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }

    // mouse attraction
    if (mouse.x > -9000){
      ctx.beginPath(); ctx.fillStyle = 'rgba(99,102,241,0.06)'; ctx.arc(mouse.x,mouse.y,mouse.r,0,Math.PI*2); ctx.fill();
      nodes.forEach(n => {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d = Math.hypot(dx,dy);
        if (d < mouse.r*1.8){
          const force = (1 - d/(mouse.r*1.8)) * 0.6;
          n.vx += dx/d * force * 0.3;
          n.vy += dy/d * force * 0.3;
        }
      });
    }

    // draw nodes
    nodes.forEach(n => {
      n.step();
      ctx.beginPath();
      const grad = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*4);
      grad.addColorStop(0, 'rgba(99,102,241,0.95)');
      grad.addColorStop(1, 'rgba(244,114,182,0.05)');
      ctx.fillStyle = grad;
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();
    });
  }

  function anim(){ draw(); requestAnimationFrame(anim); }
  anim();
})();
