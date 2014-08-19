# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu-14-20140818"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/20140818/trusty-server-cloudimg-amd64-vagrant-disk1.box"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "src/", "/vagrant/test/public/src"
  config.vm.provision "shell",
      inline: "sudo apt-get update && sudo apt-get -y install npm && sudo apt-get -y install nodejs"
end
