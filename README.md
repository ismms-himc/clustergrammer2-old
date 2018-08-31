clustergrammer2
===============================

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/ismms-himc/clustergrammer2/master?filepath=Running_Clustergrammer2.ipynb)

A Custom Jupyter Widget Library

Installation
------------

To install use pip:

    $ pip install clustergrammer2
    $ jupyter nbextension enable --py --sys-prefix clustergrammer2


For a development installation (requires npm),

    $ git clone https://github.com/ismms-himc/clustergrammer2.git
    $ cd clustergrammer2
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix clustergrammer2
    $ jupyter nbextension enable --py --sys-prefix clustergrammer2
