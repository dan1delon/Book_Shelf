import{S as w}from"./vendor-3d873957.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function A(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=A(n);fetch(n.href,o)}})();function p(e){const t=document.body,A=document.getElementById("toggle");e==="dark-mode"?(t.classList.add("dark-theme"),A.checked=!0):(t.classList.remove("dark-theme"),A.checked=!1)}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme");e&&p(e)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("toggle");e.addEventListener("change",()=>{const t=e.checked?"dark-mode":"light-mode";p(t),localStorage.setItem("theme",t)})});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname,t=document.getElementById("home-link"),A=document.getElementById("shopping-list-link");e==="../"?(t.classList.add("button"),A.classList.remove("button")):e==="./shopping-list.html"&&(t.classList.remove("button"),A.classList.add("button"))});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname,t=document.getElementById("backdrop-home-link"),A=document.getElementById("backdrop-shopping-list-link");e==="../"?(t.classList.add("button"),A.classList.remove("button")):e==="./shopping-list.html"&&(t.classList.remove("button"),A.classList.add("button"))});function h(){const e=document.getElementById("burger"),t=document.getElementById("backdrop"),A=document.querySelector(".icon-logo"),s=document.querySelector(".nav-links"),n=document.getElementById("x-close");e.checked?(e.checked=!1,t.style.display="none",s.style.height="0",n.style.display="none",A.style.display="block"):(e.checked=!0,t.style.display="block",s.style.height="100vh",n.style.display="block",A.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".icon-logo"),t=document.getElementById("x-close");e.addEventListener("click",h),t.addEventListener("click",h)});function E(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){C()};function C(){document.documentElement.scrollTop>250?document.getElementById("scrollUpButton").style.display="block":document.getElementById("scrollUpButton").style.display="none"}document.getElementById("scrollUpButton").addEventListener("click",E);const f="data:image/png;base64,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",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAgCAYAAABAQWX9AAAACXBIWXMAAAsSAAALEgHS3X78AAAD/0lEQVRogc1aS24TQRB9QZHYIM2wYxffIHMApDh7pBiJJRLODcwJEnbs8A1iL9hl4ZwAW+IAw4YVEuMbjMUOITVq9EopOtXzsRs0T2qNp6e6p7um6lVVJ0fOOSSATHK0x1QjAFMAFYBFisWkwqNE82wA3O051ivnigoaFLxy1mxzADWAFYCCbc2vOef9RMn7/tzYjFiB43XC/pxjavZfc845nxeDU5CzUTvnXgRP3huSpXdLdT+OzFdQNsRtcH/N+QbRtFt9AbDk7wzAc/VsB+C1knvL36fKMjzG6veS4zxmlJX+S7riMYBz9m9oTYOBVs6MTTb0jNcteeEX7xdsW94Xkc28oZI9nqj+OcePA8UODlo5K3KJbOgzrxV5QiLJBwAlgBM1TlDzuqN1eAt7B+A2eM9CcdJwEeGIheKPNf1/5JyrDDk9ByivUXPs3HjPxHjPYNqRu090njJalLSgnG4W5h9jtpJWMKM1QeU5IlNRpg76xT0rvqegTDkkK9LK2SeBg0oA74bOIX1xTE44BBt+9UFFmhTwllMEydw6Mu+ITVAqd4mhoBuFyeK64T0a4dpCNLli3hBJY/MUf81nkGQsEQuxaiDOqUHeIWq+K4/MUbSMF9QMDOE8q47jBW+dc1+dcx9ljkNqK+uL5rSIGxXqY8hYU1WRL9xkMRoZc6pwnq7jBT8A/ATwWDpSFZ5QijnrOS7juK4u0DbPqIOshW9cwyt5llI5K5YIO5L8uWrLlrGZSh8OQXbAsccD/jw+cDGCmbKYaZA1gxuv6EYxZCwtmirzZbB5/96LQOaswXrOI/0wif0AQtYZbc2+qoGk847EOKK8VeFbawszcsfM2+rvlX2ncKuJqsesWinnl6yZEwl2hixoDX1gpQSH8tcfWG41DY4e2tAmK9W+5pMdlTqj4k7Vsz7vRsSFYgVtLFFdWW5lKeekQxjWCL/SNZveZMZ72YiUGVLHjRV3nKI7pgzjIWKJYRPnPRiTMlq14VNE6aU6Km3DFWs5aTeG/DZVAZtaOXlDOL5r4JmU6MtZUVhutY34bJfk7pRNH5qL20mIP1PzS4jXvLHF/rg00giNTaTftDRLOYsIccX+wGVlxd9pKWMVyQp1RCrKkWtY0PbFlhbTpBj0JfsUSeAqQnRhcpY3LF6TetuXD0N31wq/N1Iop+Si29zOypwFEr22Len/+n+eG6Ui5C4keBHZmC49kpFpBC7SaitfSqWckmTYhisuRFyhVufPyw6c8a+QWcpJVXhCuYOVe2hkhgsuh/q38pRYsPLtGo593vNyiIoBLWfZMZT6MxodCmMuIAdOfsOeaHU4F3gC94rUf7YJ4dfh04Eu59sW+pzryD833APAb1ort4aIc1uRAAAAAElFTkSuQmCC",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAAgCAYAAACb1g2aAAAACXBIWXMAAAsSAAALEgHS3X78AAACzElEQVR4nO2b7ZHaMBCGNxn+nzuADo5UAOmADqCDuw7OV0FIBdx1QAfxVRBTQaADqMAZz6wnGg1arWKxIfb7zGi4GyR/SHpkaS0+NU1DAIDb8xl1DIANkA0AIyAbAEZANgCMgGwAGAHZADACsgFgxAQVPRpmnK5Rjb1yLIBsw2bDaaG4yxNL96aQb05EW8UxayJ6HnsjdGAHyTBpZdgT0fQv7+67IMmcZXxQHOeDiJZjqniJds3WCCk0wpWRciWXlfI0PIr6LBXXpDl/7NypSXNebYrdozZV/ITxp4d9RGt54ieiT4powONfB0jWAeGAjgWL8cuRY9NTtI6V9z9E68k9RCPXmNdnYceCzIWDfW2XDk76IuQtnL8l0d55uggi3EuA5BsRnQfwlNN2uvONzr/lKeS166idZcGS07Wpok9MtA2imTruKRq5489jpuOFOv4sMs06Ba6hVpxT6nRVQqc8BJ72rSAvQrkpC+df/4rLtvfwqLyGLZfZR0QDSmKyhd7L3IodN2IOQlGwMtJh3zhPqKyEdFxKkO0cyFtxm6yFsjOWrWBhnxPXWRdH2J9CnqNTH6F+MnPypAw2gyQm25Q7rVtJRaYR7T3QaaSOBHSkhv4PzjRzz7JLIfsHxcBCfH433+hlu0RGvh8sRjdarhSNWCner3TCDkmuV+G7vh1tzilWX4Uw9SMWq2K5jmMXwJIJN0ysAVOEuCjXNzRA4aQBxv0uFn1d8Hu2VE6KaeOjct2GCGNmJjynXmV8f1ImRtuGJJxmWxR5YfWclE6gqS/nBOFC9+0OvLkCX/8tE66EZYZdB8TTKM2eOZ8hTimtec3coWtFQKgj9BSusV3rD12ApOb1wMoJE2ufdAdn21CfxoZw6fh1j459x0gbkYvIboQjpgYA6MGufwCMwC+1ATACsgFgBGQDwAjIBoARkA0AIyAbAEZANgAsIKLfQQPs0x9Bh2IAAAAASUVORK5CYII=",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAgCAYAAADJ9TDRAAAACXBIWXMAAAsSAAALEgHS3X78AAAIIklEQVR4nO1bvaskRRCvdxi7q4iIyRvBQKM35sLNRSbCbSQa3V5k6L7U5Pb9BTeXHziXqJG3DyM/4GYDQROZzcRA5ykYiMqsiJi1zONX54+6nt6e2d37wFcwzOx0TXV1d3V99h4452SHMBeRGyC3FpEDPD9tujjYZacXsD94ao+0axH5C8+/iUgqIocXa/lkwa41yFhEKvrdCsQSwlHinkF4LuAJgEs7ZrERkQKCwdpiJCJXITwXwvEgjLFxkj33MRORaZ+PugTERVzlBtorej7FverATSL7DEEWiaeQwmfa56LE9t0+3+u7eAP6vLkrAVl1vGcYR+AonWwDXhpBK4ZOH8jhUE92SDMWtG8VkAKbaPEIeAlCl5M6wSCuBj4+wsBmMC0KY2pfYRJGAToJdtAmWAY0UBdMwVtNfKnm08VRv6gEzhT39psFvtf3C9xL8JLi3hA9NqEZCXWJKyHcKZ6VHm+6lH7XRDehb4R8Om0fk5aoTFt/aJ3Ujmvu4qByzmXOudw596Fz7rZz7m28GzvnDvGs1wxX2zZxzjWR/YR4FdBm3GkHnbbv1LwrwE9l3legVeK38jql+bH8t7QT51zt6Xti+NS+lda8g/cGdJkX265zYPlpwI/2W0bM5f0r5KTGqvMjqMc/ROR7EXlORF6BJLea6ArtnhK7sJXoL0Xk7gbtwhBrhhR419wSkTMaV0Xm7wQ7LsdYWrxj3I/MPLQ0r3tMwQnyPmK0zzHGrz6YRnNL/L7i8QlanA/wfAfXyOPznWFcQnOoGuMWaK/RNtjP6hKQdpCXI2l8JSLfiMhPMBWFUaWFwdeF+4IWLQb6CojCEmZQ+VC13Rg8nkT2SzgsX4AOf5tj3Nb85bjPevpObGamRMduJDXvDA14b3bl8IZ8kBj4GYzfpgVY0GQtMPHWBpbA/65H8izzCNs+wIbozUAbXtAmW2/ADUEfvytDNCSkPbaCLg2ySeLX2JmfiMjvRur1W91tvsltIP2visinPQb/MOAOSgF65QP6TEg4XgoscsyY+pgHpbfGmvii0V6auEtANmmQERb+PZM9LSmqsepP2zNSg60P8ndkWH24p5yFRjEqCNfAZ5tPabYwbQoV0bC0Jh5TUJHpbXn4Ec93evQ5Au9H+M1mctRns/kEZBJQTcfE/J/0fk52fkzO0pQWNcEE3QNeAS3zD2mg1YaJ2HUeRBDK3yOnck27v/L4KjFQw3HV0LzCc0l9LzsEUP0HNkurSJ+ioO9GtPEm4Emd45i0wjn4ajE5NIMPXhORF0XkLRH5VUSeF5EXsMjt9TW+n4CJb0XkcxH5GL/H8Hteh1P7Awb1Jt69iz7udvR/ukViS53mhjSe5hqaATkWCyltjiFC1cWzNdEpRUoxvtEEgjmIJ5+T2rUAZxh8BjUskNacdjYni1qGnoUACaly9kvmwGvfvwGbH0rhb6NBfBO6rVDsi5aCTwD69rNVdtYKSKgkrx3xAo7o/McZVHNNdrehLGUG/DFlaKckOEuakBXZTzH9ZRF1oAvYEVgfJLRDdVEqSvyoP7KCMJxSZXJKIW+B+wnaT3GllDibe/rywaOonfxvwfogVcfObeEZsmNqaw+NM9V4ElGNeV911C3YCZsE/JDVDiKLvpBR/aOmGs826lvHsA/TtDugvPvYk+N3gfx9QrWLBjg17hXVDGq0N0RLv6mp/hDLi0PfvtpBDvqlwZmhH19fMRfXSriWkg6kF1sXaekvTF1lOrDPQRf7ICHV7dspNZmSMWmDBPgZ7Y4aO+ZlEflFRD6Dz/FRIJHW5YdIIKuamdi/AD83Cacc4MOwxmI/aZ+Hn7RuM4Ipr8nHe2jAAhLjf1hoEMUkyIOkuGYduZQ2a/o+njcNdBEQkEmHgBx5cEKCnxhzxzy1Qp8SnkI75neQIeXQMTM+lcLQUDrHHC5NlOijLSa8Vr71GIJGn5kJHHLjNqQP0CK101V2b3qqpjxgGvqoeFsWj+HJh2PL46qiU8+Ytc1X+nceE6O4C4M3A57tu4g0MWxiJx04haFd0rgcmXYXMNn6TeKZi4LL/Vkge9rXEbP4QwtVITPgSxezGVgTji2YqTZQ9X2M6EpMBbbVRmtkdkNj4INVS0RnBYX6K4r6rgXodI3Fl+CagNaaMraXwYtqlEM6nsA0lsTPZfQ1xVysgX9Lv7lEHXbBtjmHbWzmMtBmeeaCoQoph85sklLaEGMSmhHalHaOyQuZBl3M66bOpOo9x/drg78NsCmY0zjtnKQeU5wZPJ63EdoqraXtQ0DsBGxTYBuaD9HvVHusjH3mSblhdvY44Pv4QHF9KfEah39uGIEUz3Mf6AqRDwem1AvKaV0Fz+fHNC9BUkJnMvqmt+2gR4G2TRAarK3u6qStPGaOd9HY0D0x5f2SilxWuH27/6wDd0JO5kGHmeoSxJLwfVVxriWJKXb2zavoeZcEdTA1t4fnY+hwXizEOpe+M5FDac0i+FoQvuYq1PFiJzMletquZ0b1TC3nSSamH87hWCd1QXTmoJsZ/vl8qj2X2pXT4e8ryjNZR3lKY1Unm/mzDnxO+Avqq4Zjys7vzgUk5qBz7KFZ3+HcEC0rIBpN1SZy0OjGF8UwPZ5IbrcC4qNTeA5Gc1tCv/Oe82nHp8AJNObPF+FpQnPcERHd72fXf71MInyO2HyA9RViaGX0zpb3Oc5XH0XrRlo6GJr2Hpvcg9JJKC1f4LkgB9YeP+hDOwT8VwsFXeiuP84npqRw/u2uBeQCHl/YJCBe2PV/cy/g8YaYo53/gYj8C5kJRdbLdswyAAAAAElFTkSuQmCC",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAgCAYAAAC4oZ4KAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjklEQVRogdVZ4Y20NhAdR9//0MFHKgipYEkF2Q5CKrhNBR/pgOtg0wGpIFwHXAdcB2wDJprTm9W7iWHZC5HYkSyM7Rns5+fx2IRpmmQjyUSkFZGDiLyKSCki41bG9yLfbdiPDmCp/Cgi1ePCMi9bAXYESCzlxn3dhWwJmJf+cWGZl60AyxNl3UJ7BbhBm3EG8H2KOv0NUjV9lLOzmaFNO6Wl26gf/3vacpdUxhRYiiew7gjn7/1bSsIjEGxLwEwqAPXLyvYXLM2HWJZbAZYDKE1fV7R/RczWIWUALEf5fjeM/7jmC/irWzKg3RH+THXzaZpOCb+2a3/2WYYd4acOC22MRcyYAvHZLb/2025ZdifCFdgyJwNYk5OO5usbel6avTJsC6BGLLcyodPfAZLJkLD1MICVC4PuAUqW0MsB5D3SLgBV7B2wbCbINDbxAHIAlxrkLdDMXu70KpTzZB33DFidGJiWMZt4h/SR/S3Q2B7vlksAt3sGTLC92zJhoErUsSz5HAZtAFAVHPs9G8Euwo17wgoNB+pEKPE2c/hmKRCKWFjx/Sc29JddXBmtQDXFKJaU/0qlbGWQy9KDkbvZNZcYprN5vnHUueBYw5KBSXPXO+MCwy50ZGr3eMX9JVE2t/RS0iQK9QTwTUR+A+CpepUhUbd0h7YLYYYVAGANUAI25I4FGYAwBv3riKObAL7To61dJp6oWUf+qgfwNjkjJtSukKxtS7YK9CVDmyaE0G4BuDFMP/J0p25qyZzccmsSjrqkSTliydsPlGfYzGkjOdC7MbbDd55RfgCwB0yC/bHS8+qfM2z+nMCZfUZ89J3NxFEfTgIxxjbGOLlU0/spxjigrEFZT/VWVsDeOcbYUZsBz2OMcdTyLZ2+3em/OrTfkObkLXGb4Nll4i8GS7J9oX+YWvYH2PAVzHlCOKFM+Qv1xmqN/Cvo9mjzDF1zF/3K2971AuQqOqacVwSU/jYhX2h7InYVmP0zZr9DnhnXuvyJ3kfY6JE3ZtozI0Zam01vPtjpV3Cmt8KIFmxi/6W+5VfX9gX2Pux8cPoSQuhd/p0pIYTRtWd/NloYE0LonM3B6yb0zcaYKLvadTpqd2CDxYprGLvnyhI3FJ5d18N0jLHELE/Il+ZnUG8+pyTmXevRpiGGeV9WkM8yv9Un2Ob1a8fq3rG6c3U2hkJuLL+Obgn47NcBwCPyqcO5UMeqGGOOwTGAEwHFTrsgGz1tAjX0WzwHep8cuO95stHQN2v6bulsNlRX0CS+4yAzO1uXOI6kJAmU81kjPtoQINZpz5grwNBnljSY+ZEmYXJAGDNGes+JfTWBYj60Ip3O2ap5DLZLckCnMcsP2HmWou4LdqwcfirlOwrUCew9QccC0G/4xgveCySh45bFcGUIwf4h+ABUfe/f2G0H+pcgLgDuaFwcG3K9uLqC+vvepy9w4AMc91KAp1u2dk4NaLp1ztN63dav4UcIQdmoIBsgOjDNW6CpeYvszcbv6syhp4CrjvZTB/gz6aqOhjCma2NSPbNhv/UYFLNlAa8+9TssWn8WEfkHC8jv1HficMMAAAAASUVORK5CYII=",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2UlEQVRoge1a7XHbMAyFe/4fbRBuYG0QdYJqg2qDaoMqG7gTVJmg7gb2BFE2UDeQJmCPPTD3ioIW49pHJ+G741kfjx8i8ADY8spaSxHYE9FdDPEErC407qvAh/f88NeAbIDEyAZIjFMNcM+x+6Xt45vZuTMhKyAxsgESIxsgMbIBEmPNX7KWUIr7DRFVC30GImrf2oadG+sTv+Hecsv4T6yvcAOd2rbimlNTR0RToI8hoh64IeVtFTV79DCGR8Fj1US0IaInIhp5nFDk8PyJI8UE4xvu1z2z7eWwd78ziVYps8VwHEZrbaHwXdsKrgnw9keethLc0lo7HeE3EXN4jgk9s6aAe+VaI0LOQfGA6gI/2D2wx254fjfHTuHVyrlUEbEX7oGzgXnk87j+N3w8s7IK6POd+4yiHyqs5TmlIkseT1VAjOd0CqcTnHMowB33cN4q/Brue48dA8/hWwHcSVFWKdZYw70Wrm+VcSUMr0cd79rLUOc9n/n4lxKjidVJ7KXe024XqjT0bi23FHD8U6gOlSXziZZfdkrB8sy7dgP4hc+Q2BBuoz7x+SDuN6SjAqM+BUIVQoam4ggXjf7Anz5kHXg+ek0GmPnzJnAfN9nlnx9wXgc2C1UUqpYGOO5gwwphMJmPDKy7E/d6cBDPO7kMrZQJpOSNwjH0MrQQLna8ETFeTtynFhveCVXh+lrYeDfHNyL6wuM8svdugD8rIdE/38DJ+cCOMUMZevfXOCcm4XNiKQlj0tsHEqVMhpPCNwtlpSxDXdsFuCPPL/kePZ83Yn0NcMpQGZoaI5TCI8dgDCWGrxfAk57YKmozC/FelpPECqq4lcwZAsUAwXp83uh5nTu47jl/lLyy/76V116S55fyF0KsAoYIjhHl1hzZ710jVgExcAntK/AOEb+Yvnvk9wGJkQ2QGNkAiZENkBhaFRT1Z9GM8yArIDGyARLjkgYIvb/N8CCi3w52eOweHqFuAAAAAElFTkSuQmCC",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAgCAYAAACowdDWAAAACXBIWXMAAAsSAAALEgHS3X78AAAEUUlEQVRYhdVZy3HbQAyFPbmbqcBMBWIqkFyBmQpCV2ClAlMdMBVE7kCuwFQHVAWhbjnSt9w2s+MHzxOMpeRPPDZmaFJY7AdY7AOwlhDC2FOFe6r2yL3r5yj+SVAlIr+o6auIdCnh90wpJTMR6UXkhHg3IlJ+RCWPE/zKKBjpXETyN1jTq1NKydSOfdidDDhrNdw00jQhX+Ad5ebo177RWp9PYZeGEEIZ0tSGEGrIKbVvhKyz5/aNf7oRpQ6h2hm4hvJLh9/jafFYUl5t+rBRc7QpFWSIYA0f/zQvVLIwimSmXRfkGbMh/oDFrUjJ1NoGM4/+dpWMZ7J5gbdvndhZOb/jM4H8Fzw/ca7nkIvjzMx4l3ivReQz+m2B/DzPyRg2HCMeLp6ppFWIeQv6PeB7ifl6Ui5FHK5mGKPHGEIgucEzSW2YhpCIrNdPVPDCsV6ByXRhkU5pwQXJ7ou5f+h7lvgWKB8NeUdz7xDHySj4Y59mGOyCLMrEu8NhqEC/cxhmJSK/98zzF24qkG/QV8fl+btRz3CQsRhBXEY279HQUqKtJGAoTegJCUSsCXgyB4EHKhgsyDQObzRBj5b6TrtXHhD41ZVah9fBtUo6X/2e8ZQKjNNj7OGwbvc0pqTAhRtMcuiCMnKdhhY0JwWXcEHB4mcEKjnmbQlwFFAqtDcYT9trJ+WsH77+Q2ZSkWupW6n79+Syc7StyA051tU0TgPZlvqy+3pZ2k6cfG1iAKhg4QlKtRzWv4b75gAjQaxLFQCXiXCl5V/0iiPw1vQ9upM5rLWi9KyCpcd2MYcVO9q9Je3MzFhbd4sBw+7kQG9N73IDYpoCPgIdTevsM5bmDXuuQry+6mIdkFuV7k1OqqTuXlP/uZEp4KIWTQ9S0kuYPfKScg4hNS2yM2dSFWuovaazybkrL1qNwzKBZJNKfjJoZOvIG6BcbW4KrsDnUKGox6nXALS1aFhRu46TU97Kdaqi+py+VyTL8y28KKAhxLvTWRAMF1g4p01reZxiqRKd+a1zaKzUfoPhZ5iLxyjB60zYERq3p1z2cfx1YD8QvNsSymZCFoisuwRTNzI/EF/7cPZTOGe2c0o5ry5teF0aQjhZ3iay+cHJDwtHziMrtzG/pzvB+54aJPcx3JyhT2528cys6RvelzwQn0mlsczmkPucKe6NmOzNn03L7nDOM+IpPswppRyMzC0l8UJxlnmukpnDS7V5OeSWgOcKb633chhxCsV4cbd2ByCjQKVKswJrnFX1FM21d7xC3XVFvMmIG3LW4d0KCJSozUTqHTUdBfaK1inz1vCABv3UxVemH6/hBu9dQEzEyM4pqWxA9mJlCnhsphPAs4C0pD6FU5q1Brgs8GTU5+F2j6uQApax/xro4U6nxN8kdjsVQjqqLrRc6jFGRrtqQ0iGuXMTl3mnOERpvM15HbbU8hS1tDHx792TrULU4vEmjYFBdy9ee6ilPwaJyD9qkW5jqapMpQAAAABJRU5ErkJggg==",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAgCAYAAAD64u2dAAAACXBIWXMAAAsSAAALEgHS3X78AAAFXElEQVRoge1azZGdRhBuv/J95+TroggWRbBkIDJYHIFwBB5ngK66eDYDnAEvAxSB8UF3lIBx4fra9VVr5sH729Wz6Kop3huanv6fnoYfpmmS7xxyEclwLV5JFb2I1CLiwUclIiMjbIb6GtRgOu5eYM09jPMn/v8sIoERNkMtQ0njWkbbwym2iLoQVBiPF6a7X0q7u2tL9j+DAIW+EZHnlxRtM9RpMCCyXsxgm6HOAzXYW6Svq8FmqMtAj5Q4V2tfrrHAaxQTHtcOw0IGLxXsCbPX3hI48P3uCJ4XiwmZDfXCQ8En1i0IpziRN3eAPo/qjDWWRj2th26J3o48u1lp/QL4fgXupaEhfl2EdiCcXxdkms9Fv4tIiyi+Bq/z3vXXJYjtcLCazwXvjfCzQSYcwBhq4L9GSuqx9iOlR4WZzyfgNNgrQprUv8bcw1DXkqUHX5/OpjRNU0kBWlG4tZgLJqXMMOJ3g7Dt8DsDXk7zNWgFk9Y80VScBuNQ6htwbzDzAXxp+ixAW2VswU+gtS2e8tIRbkZrKH5Osluc1AgHEuFi6rPCq1EyQ0gZ0bzbQimTUe4IIXgvGgnXGiozivf0P2WoKuJYjmiKeZ7xA0YfwRPMq3yeeLcyKS2W+xxjrTaUpwXFMMAK6ImwXUCZaCNKUE+1xYRG7UBevaaYUL46w7+LrK33erovETw1KEdqY+YUyojcYUnZB4y1qpgQyuV31M/6gg1XsC/Ne9aDOdhxea15PlZmjomNXUvYxjYhF0BpPVIT8zlBQ+cewKNPFCLKd09zLa73puDgdVTutQVJdUo3Qw01L/YHfnsYrIUhPtF/gVFjgiqc0mE+djNv6GDZQpGpCm+e/w34d6gGh4hiVaaUw1yyMjzaWNyZ0Ki6x9Wb+TuqpGJepIIe00rRaqhcwLPAEXqPNfsErh5AZ15/IVnsmpoduMrNI/cvBdUx1SAbqiUv3ZMxWsJRo3ngPtELNi2X157HhJzhidLr2vMZl96H1qzoDaojGa1hAxT3ANwM1xk+rOTpWChWt5zMptVENksu1bmyyamo0A23TGzUTMtj6HxB9HsUHX3i2djGbMt0u3YGubSa7IhPy6MjXiYULX5BJk901xQTduRrnt1eHH4bkC3t05uhbgS21xw3ApuhbgS+F0O5SHP5pkANxWeKUz9CzC70ASN3xdfQW2OAnkruFHA5zvpInfEcjhK14TOnjzqFOidnwQ4L8mnc0wIKmfkd60yUUIjiKo5VZEajMvcLs1Zh6OSkTFWOM7jO0KginYuMcFluR/cVYrLWGA1GGXH2EddAcxnJG5M/CT8C0ZHgI07hgRjR1BEg0BjxkoKMXtALvJoY0pd+Le4P+O2IXkf09NqafuAIPho4R4XnuGOhBh3QQvLg/6OI/AS8YNayh2BrTJa1JJz3mNNvJ3L68KXFC8pn3B9IHw73U12V/2BHiujMAypETm2jiqKBPcGRsVWh2rphZXQk4AAaI3U2BjpP5KT8HLx5chpdpzf0Coo+hRE8z3L+TY6ooGkxkJKF1rVG4jNPjs5FIPySHLJAx6PC79p8776qGb0zYa5MOgrfjEJdmQ7mOU17IylKn9UIGUmRjub5A/0yElEcLZkxHPNYgvfeeGmG3w8w7mej/Io+rGzJGZUfzjZCEVxT2mP+cjJQQw4nxrmYv0WYD7zsNY6uBaU6BU9GKCnNdBQ9JaU8+6WR9aCR0mVOtBxFiEarjbaGvt1wZDzF74nnzqTNkf7nRmmpdMdyOJJlJDnsfq9GGEwjWzsRI8l2GFb0olL9Nn0JV6OPZt9wtitop0Z75vM8Zr7sC8PbGtMk/wBTxn83s8bSugAAAABJRU5ErkJggg==",R="data:image/png;base64,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",b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:f,width:131,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:I,width:62,height:32},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:L,width:114,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:X,width:103,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:j,width:78,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:O,width:82,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:B,width:55,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:M,width:81,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:R,width:115,height:32}],v=document.querySelector(".splide__list");let u=[];b.forEach(({title:e,url:t,img:A,width:s,height:n},o)=>{const i=(o+1).toString().padStart(2,"0"),d=document.createElement("li"),c=document.createElement("a"),a=document.createElement("img"),l=document.createElement("p");a.src=A,a.alt=e,a.width=s,a.height=n,c.href=t,l.textContent=i,c.target="_blank",c.append(a),d.append(l),d.append(c),d.classList.add("splide__slide"),d.classList.add("item-donation"),c.classList.add("item-link-donation"),a.classList.add("item-img-donation"),l.classList.add("p-num-donation"),u.push(d)});v.append(...u);const r=new w(".splide",{direction:"ttb",height:292,pagination:!1,perMove:4,perPage:6,gap:20,fixedHeight:32,arrows:!1,speed:800});r.mount();let g=0;const y=document.querySelector(".scroll-button-donations"),m=document.querySelector(".use-svg");y.addEventListener("click",()=>{g===0?(r.go(r.length-1,!1),g=r.length-1,m.style.transform="rotate(180deg)"):(r.go(0,!1),g=0,m.style.transform="rotate(0deg)")});const S="/Book_Shelf/assets/icons-a18bf9e2.svg#icon-amazon";export{S as a};
//# sourceMappingURL=icons-5b3c9711.js.map
