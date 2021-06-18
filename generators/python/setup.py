from setuptools import setup, find_packages

setup(name='claros.interfaces.python',
      version='0.1',
      url='https://github.com/aqi/claros.interfaces.python',
      license='MIT',
      author='Aquatic Informatics',
      author_email='info@aquaticinformatics.com',
      description='Provide Claros protobuf bindings',
      classifiers=[
          'Development Status :: 3 - Alpha',
          'Intended Audience :: Developers',
          'Topic :: Software Development :: Libraries',
          'License :: OSI Approved :: MIT License',
          'Programming Language :: Python :: 3',
      ],
      packages=find_packages(exclude=['tests']),
      long_description=open('README.md').read(),
      zip_safe=False,
      test_suite='unittest')
