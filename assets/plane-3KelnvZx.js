import{cO as m,cK as p,cp as O,cm as P,bD as i}from"./index-7JBYUV_z.js";import"./sphere-QcnSo3Gf.js";function l(I=q){return[I[0],I[1],I[2],I[3]]}function x(I,N,M,r=l()){const u=M[0]-N[0],f=M[1]-N[1],a=M[2]-N[2],c=I[0]-N[0],X=I[1]-N[1],b=I[2]-N[2],F=f*b-a*X,h=a*c-u*b,T=u*X-f*c,_=F*F+h*h+T*T,A=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;return r[0]=F*A,r[1]=h*A,r[2]=T*A,r[3]=-(r[0]*I[0]+r[1]*I[1]+r[2]*I[2]),r}function C(I,N,M,r=0,u=Math.floor(M*(1/3)),f=Math.floor(M*(2/3))){if(M<3)return!1;N(n,r);let a=u,c=!1;for(;a<M-1&&!c;)N(o,a),a++,c=!m(n,o);if(!c)return!1;for(a=Math.max(a,f),c=!1;a<M&&!c;)N(s,a),a++,p(E,n,o),O(E,E),p(e,o,s),O(e,e),c=!m(n,s)&&!m(o,s)&&Math.abs(P(E,e))<L;return c?(x(n,o,s,I),!0):(r!==0||u!==1||f!==2)&&C(I,N,M,0,1,2)}const L=.99619469809,n=i(),o=i(),s=i(),E=i(),e=i();function z(I){return I}const q=[0,0,1,0];var t;(function(I){I[I.NONE=0]="NONE",I[I.CLAMP=1]="CLAMP",I[I.INFINITE_MIN=4]="INFINITE_MIN",I[I.INFINITE_MAX=8]="INFINITE_MAX"})(t||(t={}));t.INFINITE_MIN|t.INFINITE_MAX;t.INFINITE_MAX;export{C as X,l as b,z as o};