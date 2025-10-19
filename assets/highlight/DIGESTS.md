## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-qimhSkVWof5rfaFajQk8KAtzSRYyIArcJCMKWdDcNq34F4uplk08wmEyUiYLmO+3 /es/languages/c.js
sha384-5fESKgrRcGs7I/89bn7NKFcHyvIVcmQIG4JfCEAV5Rg5VVtskrmGkHVOIsD1642v /es/languages/c.min.js
sha384-xjI3wQy5aAhTr4JT9bE8tZaEMtNn/fguEQOem1vG04xZl4Ov0uf8bsLkQUoUzvbo /es/languages/cmake.js
sha384-JdSkDmOvEqN4fTPk/zl0QpN/wGh53J+xJRFtOMdEwhZ2iDgT5a/Dl18e/TChDqjK /es/languages/cmake.min.js
sha384-eM9Op3b0ilZ/iW7jeVAMo//MKcEXHCbg1Vf8SMrqds5LIOeF9+3qaX//TsnbItae /es/languages/cpp.js
sha384-+tDHTmLKfBxXgVksRhLEJM4z9PfcGQ2XsrZMDcdJ1SIlPZrtAR4+m4XUX+zJf5nf /es/languages/cpp.min.js
sha384-lU6If27eTyL2Yr+WS3ErF0/raeRKUheLuCM44IUaUshDCTvTeQijobPXY4wgkDGb /es/languages/csharp.js
sha384-k4z6XdU7qI35NxUF8SGumv5kMerrVg/xoat0iSaWnu/dHKoNZKdxZN3gI2WYgMfe /es/languages/csharp.min.js
sha384-DRSBRBp34y5KixP9TEkoyASphUQfWiiqtSP20YveUIY05CjkoCG1wOe8A1cfMIZT /es/languages/glsl.js
sha384-0QXwzWESgZAQ8866ALLJEDZ9l14HhJTWnECXBxJ4DHDmywVn0LRIMqz7JJQWG/AM /es/languages/glsl.min.js
sha384-qCr0xtEbtIU6E2yKVSftA08wjUBxW2zlHyVvXoQoontrc8eZtFMO/vSWWFtJhpzK /es/languages/latex.js
sha384-Nj46FmS2fPnUrHYhGDrVZjS+SqPPtCVnjiMaPB2WFMnYAWV8lW1T2EQ2gxq8gDs1 /es/languages/latex.min.js
sha384-OJrXTVCemUa68axskWVxZHXuDfyPWWFK0X2cJsPaMBt6jGY1HxnBZJVPEHTqou4H /es/languages/lua.js
sha384-cjlU8DPjZ3XY/dLzIx+CaoB2jzKXf43s2KSU2rZQGmxwR1d7k9p+SFt1IsNkFnnV /es/languages/lua.min.js
sha384-npg+R4K6p4Q5dEzYDKy3gZ+l4mGV8hDMErOZdSSvqLxED30Fhmgb54WD4wkeY5yh /es/languages/makefile.js
sha384-Ev1PV0+HiSwEbi0IfJYmpMoxv3E0sWhAALg1frIiitM9zh2BVDe871H9Z/RGXqFM /es/languages/makefile.min.js
sha384-JkFMmKMbHcXjdfHauRnREGG6i73GyMisdqNivBm4Z9m2Oc82YIu5jQtIjLa508e8 /es/languages/markdown.js
sha384-65/lNNIY+ayhHTtFznjnyZ5w2NDdZIpSEcqjss/p4ex5JamZ46FdYwDDf6IBLCmE /es/languages/markdown.min.js
sha384-dkR9Qv3ZGmcTGGFP26gmcHC9DBgRYE0XLGxF3mBXlBZaBrscW0vIiVN7oTyQmrbe /es/languages/plaintext.js
sha384-AkqanemYxn6S3BQnW2++1+xqywaq2bJfFlfiAkPNd7Yv5t9YsS8tFzVVopyOa747 /es/languages/plaintext.min.js
sha384-e+d8RFZbtc5Pmt3xfX9uuElm63v5qOj7T5hAkkFbnYc1wEk7wCLlzOsm66MCf5Uk /es/languages/python.js
sha384-CPHh+9FxkWF3OtMZdTj5oQN1Qti0p4/5XBABz/JdgssOKHmfAOFz6Gu4tsG6MQiH /es/languages/python.min.js
sha384-WHdxyD51Y+ytDdcYGVkKHQOThUwwhLl/1GvZxHTHL4ImI4NS32L/B8bvB/1zN/Mk /languages/c.js
sha384-jtwnwOYA+K4zYN55fA4z4U0PTK5oEp4RcLYaXkYRKO3UUzge1o21ArmvKmTRdh/d /languages/c.min.js
sha384-gXeNvrs51WLYPI/WV54m5BSGtmPSOkEngcs0hrofwSIZ+uVCXW6SwnU75AWUpsiH /languages/cmake.js
sha384-NXUiKRE4iB8J7h3t1Z2aLjDRJslCWi4SWqJpec1z0Y927kNqWejg1uGaEh1P3GCK /languages/cmake.min.js
sha384-M2wpTxQe2N0750xYZ0zTinwbmjsZjdtuS7twUUP2dxtHR0YqhY3JuUFyyhANf9Uy /languages/cpp.js
sha384-/yf54L01PbO6NtVs1Pu9rgfNHbKXanLdNcGVuNa0m5+KiyH+1NpZRDK6idm5VoVl /languages/cpp.min.js
sha384-73x+NDGuWTdFik2BOd5uwmBcikSmR+Qx5AVbJLifM/M0hBbwKToQ45xBWxKYkpgd /languages/csharp.js
sha384-6NsOlZtv7W2iSoDU+Yi+hENfl3MuiECvnl7emdRUvpIpDbLvoCjpAU1fjE6HxIQp /languages/csharp.min.js
sha384-FmsaZHRekzHoNL++5S8HZFIJNK42khOgzT3VRksnYVHAURRu3hL5xMgenu9lHyAr /languages/glsl.js
sha384-ubPsF/0wBxL7zEYtpuIL27F0zYtzIZknk+3GdMEcQw1v0Td6xAJ6gDhxHy0UFhk+ /languages/glsl.min.js
sha384-dllA+pkm+v2eTaDGPSVPCVVy5zE8kkFNxjApnQCXfjf639vbck+YVUTbm5UIlTcr /languages/latex.js
sha384-YnQI+TwzZ1xRk2HJrBDWxf28lhGoOKeLoiMTznB2mX2JDclqH/iuPsQC86Qtwh6X /languages/latex.min.js
sha384-N16TmpAW2Qx3T6s3/C0f0jweUUSh69YsJ1+AnOsAePpjmmydXF/mjeY0MZEF/cPn /languages/lua.js
sha384-WES4Ky9nlehN2gBM6oY3/98hVtWF5PZnBO+7jK8ZVKFo+QR32zhfuRK+Mv9jQsOK /languages/lua.min.js
sha384-Z4QQuz3ChYj9P02v2CDc+Y0OAn3iWXtJnyNd0Q6QqW4GV28viT3zcS9tYSmb9x1L /languages/makefile.js
sha384-pYbMiHWycMKEfJaSEsquFRDTjCY7QHvQN0FIfDK0lVMd9DPJuOA7Kq5wZGecvYwM /languages/makefile.min.js
sha384-TVvUXbmPgdS59xZSFUeyNQ1vUkeCbBpuMj3qlzdEwdQhoO5F/WNdI94UEw8g7Enp /languages/markdown.js
sha384-sFh+6oaRBb6kdaMLf8x7qeH7NTvm2u1Ta6PtI0S8hoA+bP7UtHCyKFzaI1JBXwhT /languages/markdown.min.js
sha384-v4qiQbdZu8obdLOFoHrZxA44mmxnjZUelyHe7A6RuqmckxO5weYQVrN8Dx2UpAR1 /languages/plaintext.js
sha384-hE+znpd5xggEBW6IccZoCI0mgFHAfLVuqT/7aW8RakaQ4UJnI058SfIX3lhdGxtE /languages/plaintext.min.js
sha384-WNah6F2QDUbmrNCi0fSEyKJbSb01S1ijnoiwbDnegW7dm2Cz/H1CiH1HhWlUvj01 /languages/python.js
sha384-YDj7s2Wf0QEwarV3OB8lvoNJJCH032vOLMDo2HDrYiEpQ+QmKN+e++x3hElX5S+w /languages/python.min.js
sha384-F96t8AXoo8srthFKH5Z8/3VvjEsSi1voogu8e9C2228iG3mHzmFmjqbSRnYSWphE /highlight.js
sha384-rO1z8e1JXkdGrQw6ElleviYbEYyLs5UFGjWhyeZYpZLAt7XBXe6PecY4EY+wppAi /highlight.min.js
```

