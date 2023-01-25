{
  description = "Minimal rust wasm32-unknown-unknown example";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
     nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let 
          overlays = [ rust-overlay.overlay];
          pkgs = import nixpkgs { inherit overlays system; }; 
          rust = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;
      in
      {
        defaultPackage = pkgs.rustPlatform.buildRustPackage {
          pname = "nixwasm";
          version = "1.0.0";
          src = ./.;

          cargoLock = {
            lockFile = ./Cargo.lock;
          };

        };

        devShell = pkgs.mkShell {
          packages = [ pkgs.wasm-bindgen-cli ];
        };        
      }
    );
}
