# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "great-great-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Double Great"]

  spec.summary       = "Jekyll theme for doublegreat.dev"
  spec.homepage      = "https://doublegreat.dev"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8.7"

  spec.add_development_dependency "bundler", "~> 2.1.4"
  spec.add_development_dependency "rake", "~> 12.0"
end
